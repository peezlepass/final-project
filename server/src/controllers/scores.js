const { User, Score } = require("../db/models");

exports.createScore = async (req, res) => {
  const { gameName, score } = req.body;
  const user = req.session?.userId
    ? await User.findOne({ where: { id: req.session?.userId } })
    : null;
  if (!user) {
    return res.status(401).json({ success: false });
  }

  const scoreModel = await Score.create({
    userId: user.id,
    gameName,
    score,
  });

  res.json({ success: true });
};
