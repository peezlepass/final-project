"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Achive extends Model {
    static associate(models) {}
  }
  Achive.init(
    {
      img: DataTypes.TEXT,
      title: DataTypes.TEXT,
      desc: DataTypes.TEXT,
      cost: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Achive",
    }
  );
  return Achive;
};
