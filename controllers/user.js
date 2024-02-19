const Superheroes = require('../database/models/Superheroe');
const User = require('../database/models/User');
const User_Superheroe = require('../database/models/User_Superheroe');
module.exports = {
  //Especificamos que usuario necesitamos
  getUserById: function (id) {
    return User.findByPk(id);
  },
  //Especificamos cual eliminar
  deleteUser: function (id) {
    return User.destroy({
      where: {
        id: id,
      },
    });
  },
  //Buscamos todos los usuarios
  read: function () {
    return User.findAll({
      attributes: ["id", "email", "name", "rol"],
      include: {
        model: Superheroes,
      },
    });
  },
  //Buscamos usuario por email
  getUserByEmail: function (email) {
    return User.findOne({
      where: {
        email,
      },
      include: {
        model: Superheroes,
      },
    });
  },
  //Creamos
  register: function ({ email, name, password, nickname }) {
    return User.create({
      name,
      email,
      password,
      nickname,
      photoUrl: "",
      rol: 2,
    });
  },
  //Actualizamos usuario
  updateChanges: function (userId, changes) {
    return User.update(changes, { where: { id: userId } }).then(() =>
      this.getUserById(userId)
    );
  },
  updateRol: function (userId, rol) {
    console.log(rol, userId);
    return User.update(
      { rol: rol },
      {
        where: { id: userId},
      }
    ).then(() => {
      this.getUserById(userId);
    });
  },
};
