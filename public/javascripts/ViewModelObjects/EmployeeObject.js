define(["knockout"], function(ko) {
    function EmployeeObject(id, name, quote, totalBet) {
        this.id = id;
        this.name = ko.observable(name);
        this.quote = ko.observable(quote);
        this.totalBet = totalBet;
    }
    
    function CreateEmployeeObject(obj){
        return new EmployeeObject(obj.id, obj.name, obj.quote, obj.totalBet);    
    }
    
    return {
        create: CreateEmployeeObject
    }
});