var ConcreteOne = require("./concrete1");
var ConcreteTwo = require("./concrete2");

var one = new ConcreteOne();
one.writeSomething();
one.writeBase();

var two = new ConcreteTwo();
two.writeSomething();
two.writeBase();
