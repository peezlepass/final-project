"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {}
  }
  Quiz.init(
    {
      question: DataTypes.TEXT,
      var1: DataTypes.TEXT,
      var2: DataTypes.TEXT,
      current: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      img: DataTypes.TEXT,
      cost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Quiz",
    }
  );
  return Quiz;
};
