const Superheroe = require("./models/Superheroe");
const User = require("./models/User");
const User_Superheroe = require("./models/User_Superheroe");

User.belongsToMany(Superheroe, { through: User_Superheroe });
Superheroe.belongsToMany(User, { through: User_Superheroe });