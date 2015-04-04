var Sequelize = require("sequelize");

var sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: __dirname + '/whowillresign'
});

module.exports = sequelize;