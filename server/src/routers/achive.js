const router = require("express").Router();

const controller = require("../controllers/achive");

router.get("/cabinet", controller.getAchiv);

module.exports = router;
