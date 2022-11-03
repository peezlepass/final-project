'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemoryGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemoryGame.init({
    cardId: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    status: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MemoryGame',
  });
  return MemoryGame;
};