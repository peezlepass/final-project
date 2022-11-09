const bcrypt = require("bcrypt");
const { User } = require("../db/models");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  req.session.userId = user.id;
  req.session.save(() => {
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        country: user.country,
        birthday: user.birthday,
        src: user.src,
      },
    });
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const passCheck = await bcrypt.compare(password, user.password);
  if (passCheck) {
    req.session.userId = user.id;
    req.session.save(() => {
      res.json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          gender: user.gender,
          country: user.country,
          birthday: user.birthday,
          src: user.src,
        },
      });
    });
  } else {
    res.json({ success: false });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("GameSession");
    res.json({ success: true });
  });
};

exports.changeInfo = async (req, res) => {
  try {
    const id = req.session.userId;
    const findUser = await User.findOne({ where: id });
    if (findUser) {
      const updateUser = await User.update(
        {
          gender: req.body.gender,
          country: req.body.country,
          birthday: req.body.birthday,
        },
        {
          where: { id },
        }
      );
      const findAgain = await User.findOne({ where: id });
      res.json({
        message: findAgain,
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
