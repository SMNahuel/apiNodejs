const User = require("../database/models/User");
const Superheroes = require("../database/models/Superheroe");
const User_Superheroe = require("../database/models/User_Superheroe");

module.exports = {
  getSuperheroe: function () {
    return Superheroes.findAll();
  },
  getMySuperheroe: function (userId) {
    return User.findOne({
      where: {
        id: userId,
      },
      attributes: ["id", "email", "name"],
      include: {
        model: Superheroes,
      },
    });
  },

  addSuperheroeByUser: async function ({ userId, superheroeId }) {
    return User_Superheroe.create({
      UserId: userId,
      SuperheroId: superheroeId,
    });
  },

  deleteSuperheroeByUser: function (userId, superheroeId) {
    return User_Superheroe.destroy({
      where: {
        userId: userId,
        superheroId: superheroeId,
      },
    });
  },

  abmSuperheroDelete: function (superheroeId) {
    return Superheroes.destroy({
      where: {
        id: superheroeId,
      },
    });
  },
};
