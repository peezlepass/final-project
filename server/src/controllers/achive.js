const { Achive } = require("../db/models");

exports.getAchiv = async (req, res) => {
  try {
    const achivs = await Achive.findAll();
    console.log(achivs);
    res.json(achivs);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
