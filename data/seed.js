var q = require("q");
var employeeService = require("../application/employee");
var userService = require("../application/user");
var models = require("../models");
var sequelize = require("../data/orm");

var promises = [];

function employeesSeed(){
    var employees = ['Lyall', 'Vitali', 'Filippo', 'Paul', 'Gennaro', 'Sean', 'Hudo', 'Bogdan', 'Artur', 'Louise ?', 'Louise H.', 'Denis'];
    
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

function userSeed(){
    userService().exists("jd").then(function(exists){
            if(exists) return;
            return userService().getHash("jd", "admin");
        }).then(function(hash){
            var user = models.User.build({
               username: "jd",
               password: hash.hash,
               salt: hash.salt,
               isAdmin: true
            });
            promises.push(user.save());
        });
}

module.exports = function(){
    return q.Promise(function(resolve, reject){
        employeesSeed();
        userSeed();
        
        q.all(promises).then(function(){
            resolve(true);
        }).fail(function(){
            throw new Error("Seed failed");
        })
    });
}