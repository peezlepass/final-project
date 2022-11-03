'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quiz.init({
    question: DataTypes.TEXT,
    var1: DataTypes.TEXT,
    var2: DataTypes.TEXT,
    current: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    img: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};