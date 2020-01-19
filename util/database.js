const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "FooBar12", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
