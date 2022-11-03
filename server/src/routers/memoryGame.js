const router = require("express").Router();

const controller = require("../controllers/memoryGame");

router.get("/memorygame", controller.getCards);

module.exports = router;
