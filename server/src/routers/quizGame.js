const router = require("express").Router();

const controller = require("../controllers/quizGame");

router.get("/quiz", controller.getQuestions);

module.exports = router;
