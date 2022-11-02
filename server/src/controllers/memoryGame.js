const { MemoryGame } = require("../db/models");

exports.getCards = async (req, res) => {
  try {
    const allCards = await MemoryGame.findAll();
    res.json(allCards);
  } catch (error) {
    res.json({ mwssage: error });
  }
};
