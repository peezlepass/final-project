const { Quiz } = require("../db/models");

exports.getQuestions = async (req, res) => {
  try {
    const allQuestions = await Quiz.findAll();
    res.json(allQuestions);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
