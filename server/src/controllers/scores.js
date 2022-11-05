const { User, Score, sequelize } = require("../db/models");

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

exports.highScores = async (req, res) => {
  const query = `
    select SUM(score) as totalScore, u."name"
    from "Scores" s
    join "Users" u
    on u."id" = s."userId" 
    group by "userId", u."name"
    order by totalScore desc
    limit 10
  `;

  const [result] = await sequelize.query(query);
  return res.json({ success: true, data: result });
};

exports.userScore = async (req, res) => {
  const user = req.session?.userId
    ? await User.findOne({ where: { id: req.session?.userId } })
    : null;
  if (!user) {
    return res.status(401).json({ success: false });
  }
  const query = `
    select SUM(score) as totalScore, s."gameName"
    from "Scores" s
    where s."userId" = ${user.id}
    group by "gameName"
    order by "totalscore" DESC
  `;
  const [result] = await sequelize.query(query);
  return res.json({ success: true, data: result });
};
