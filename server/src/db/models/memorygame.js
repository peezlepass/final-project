"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MemoryGame extends Model {
    static associate(models) {}
  }
  MemoryGame.init(
    {
      cardId: DataTypes.INTEGER,
      img: DataTypes.TEXT,
      status: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "MemoryGame",
    }
  );
  return MemoryGame;
};
