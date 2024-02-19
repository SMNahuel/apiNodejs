const sequelize = require("./db");

const User = require("./models/User");
const Superheroe = require("./models/Superheroe");
const User_Superheroe = require("./models/User_Superheroe");

const SuperheroeSeed = require("../superheroes");
const UserSeed = [
  {
    name: "Test User",
    email: "test@test.com",
    password: "$2b$10$pIVGiLebgpEmb6apa8IdaeimB78RfExGzdoxxNemiRUBpvJJanLtO",
    photoUrl: "",
    rol: 2,
    nickname: "TEST",
  },
  {
    name: "Admin Test",
    email: "test@admin.com",
    password: "$2b$10$pIVGiLebgpEmb6apa8IdaeimB78RfExGzdoxxNemiRUBpvJJanLtO",
    photoUrl: "",
    rol: 1,
    nickname: "ADMIN_TEST",
  },
];

sequelize
  .sync({ force: false })
  .then(() => {
    UserSeed.forEach((user) => User.create(user));
  })
  .then(() => {
    SuperheroeSeed.forEach((superheroe) => Superheroe.create(superheroe));
  })
  .then(() => {
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 1,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 103,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 3,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 93,
    });
    User_Superheroe.create({
      UserId: 2,
      SuperheroId: 13,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 53,
    });
    User_Superheroe.create({
      UserId: 2,
      SuperheroId: 43,
    });
    User_Superheroe.create({
      UserId: 2,
      SuperheroId: 23,
    });
    User_Superheroe.create({
      UserId: 2,
      SuperheroId: 30,
    });
    User_Superheroe.create({
      UserId: 2,
      SuperheroId: 3,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 10,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 5,
    });

    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 80,
    });
    User_Superheroe.create({
      UserId: 1,
      SuperheroId: 78,
    });
  });
