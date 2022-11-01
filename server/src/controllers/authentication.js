const bcrypt = require("bcrypt");
const { User } = require("../db/models");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hash });
  req.session.userId = user.id;
  req.session.save(() => {
    res.json({
      success: true,
      user: { id: user.id, username: user.username, email: user.email },
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
        user: { id: user.id, email: user.email, username: user.username },
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
