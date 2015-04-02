var Base = require("./baseTemplate.js");
var util = require("util");

function ConcreteTwo(){}

util.inherits(ConcreteTwo, Base);

ConcreteTwo.prototype.writeSomething = function(){
    console.log("concrete2");
};

module.exports = ConcreteTwo;

