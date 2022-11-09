"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MemoryGame extends Model {
    static associate(models) {}
  }
  MemoryGame.init(
    {
      src: DataTypes.TEXT,
      matched: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "MemoryGame",
    }
  );
  return MemoryGame;
};
