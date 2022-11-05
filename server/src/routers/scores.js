const router = require("express").Router();

const controller = require("../controllers/scores");

router.post("/scores", controller.createScore);

module.exports = router;
