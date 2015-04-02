var Base = require("./baseTemplate.js");
var util = require("util");

function ConcreteOne(){}

util.inherits(ConcreteOne, Base);

ConcreteOne.prototype.writeSomething = function(){
    console.log("concrete1");
};

module.exports = ConcreteOne;

