const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User_Superheroe extends Model {}
User_Superheroe.init(
  {
  },
  {
    sequelize,
    modelName: "User_Superheroe",
  }
);

module.exports = User_Superheroe;
