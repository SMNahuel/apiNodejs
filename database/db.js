const { Sequelize } = require("sequelize");
/* 'database', 'username', 'password' */
const sequelize = new Sequelize("railway", "root", "fb1F32DcC3Cbdcf-gb62ge-GH1F1d3ed", {
  host: "monorail.proxy.rlwy.net",
  dialect: "mysql",
  port: 14222,
  operatorsAliases: 0,
});

module.exports = sequelize;
