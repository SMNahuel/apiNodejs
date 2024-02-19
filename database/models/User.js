const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    rol: DataTypes.STRING,
    nickname: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
