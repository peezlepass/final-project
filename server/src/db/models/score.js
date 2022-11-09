"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Score.init(
    {
      userId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      gameName: DataTypes.ENUM(
        "quiz",
        "snake",
        "xox",
        "flashcards",
        "memorygame",
        "minesweeper"
      ),
    },
    {
      sequelize,
      modelName: "Score",
    }
  );
  return Score;
};
