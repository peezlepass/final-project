const router = require("express").Router();

const controller = require("../controllers/scores");

router.post("/scores", controller.createScore);
router.get("/scores/high-scores", controller.highScores);
router.get("/scores/user", controller.userScore);

module.exports = router;
