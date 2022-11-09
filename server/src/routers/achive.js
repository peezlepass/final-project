const router = require("express").Router();

const controller = require("../controllers/achive");

router.get("/cabinet", controller.getAchiv);
router.put("/cabinet", controller.changeAchive);

module.exports = router;
