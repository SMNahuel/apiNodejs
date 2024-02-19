const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
class Superheroes extends Model {}
Superheroes.init(
  {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    intelligence: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    durability: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    combat: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    imagexs: DataTypes.STRING,
    imagesm: DataTypes.STRING,
    imagemd: DataTypes.STRING,
    imagelg: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Superheroes",
  }
);
module.exports = Superheroes;
