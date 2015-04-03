var Sequelize = require("sequelize");
var orm = require("../data/orm");

var Employee = orm.define("Employee", {
   id: {
       type: Sequelize.INTEGER,
       get: function(){
           return this.getDataValue("id");
       }
    },
   name: {
       type: Sequelize.STRING,
       get: function(){
           return this.getDataValue("name");
       },
       set: function(val){
           this.setDataValue("name", val);
       }
    },
   quote: {
       type: Sequelize.FLOAT,
       get: function(){
           return this.getDataValue("quote");
       },
       set: function(val){
           this.setDataValue("quote", val);
       }
   },
   totalBet: {
       type: Sequelize.INTEGER,
       get: function(){
           return this.getDataValue("totalBet");
       },
       set: function(val){
           this.setDataValue("totalBet", val);
       }
   }
});

module.exports = Employee;