function BaseTemplate(){
    
}

BaseTemplate.prototype.writeSomething = function() {
    throw new Error("WroteSomething should be implemented");
};

BaseTemplate.prototype.writeBase = function() {
    console.log("base template write");
};

module.exports = BaseTemplate;

