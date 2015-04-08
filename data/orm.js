var Sequelize = require("sequelize");

var sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: __dirname + '/whowillresign',
  omitNull: true
});

module.exports = sequelize;