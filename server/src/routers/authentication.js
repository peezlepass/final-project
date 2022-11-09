const router = require("express").Router();

const controller = require("../controllers/authentication");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.put("/changeInfo", controller.changeInfo);

module.exports = router;
