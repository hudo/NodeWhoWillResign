var q = require("q");
var employeeService = require("../application/employee");
var models = require("../models");

var promises = [];

function employeesSeed(){
    var employees = ['Lyall', 'Vitali', 'Filippo', 'Radek', 'Paul', 'Gennaro', 'Sean', 'Hudo', 'Bogdan', 'Artur', 'Louise ?', 'Louise H.', 'Denis'];
    
    employees.forEach(function(name){
        employeeService().get({where: { name: name } }).then(function(data){
            if(data != null) return;
            
            var employee = models.Employee.build({
                name: name, 
                quote: 250,
                totalBet: 0
            });
            
            promises.push(employee.save());
        });
    });
}

module.exports = function(){
    return q.Promise(function(resolve, reject){
        employeesSeed();
        
        q.all(promises).then(function(){
            resolve(true);
        }).fail(function(){
            throw new Error("Seed failed");
        })
    });
}