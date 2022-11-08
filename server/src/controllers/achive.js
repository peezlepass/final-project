const { Achive } = require("../db/models");

exports.getAchiv = async (req, res) => {
  try {
    const achivs = await Achive.findAll();
    setTimeout(() => {
      res.json(achivs);
    }, 1000);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

exports.changeAchive = async (req, res) => {
  try {
    const oneAchiv = await Achive.update(
      {
        status: true,
      },
      {
        where: { id: Number(req.body.id) },
      }
    );
    console.log("oneAchiv", oneAchiv);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
