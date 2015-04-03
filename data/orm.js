var Sequelize = require("sequelize");


var sequelize = new Sequelize('whowillresign', null, null, {
  dialect: 'sqlite',
  storage: 'whowillresign'
});

module.exports = sequelize;