var models = require("../models");
var Employee = models.Employee;
var q = require("q");

module.exports = function() {
    var employeeService = {};

    employeeService.getAll = function() {
        return q.Promise(function(resolve, reject) {
            Employee.findAll({
                order: 'name ASC'
            }, {
                raw: true
            }).then(function(data) {
                resolve(data);
            }).error(function(err){
                reject(err);
            });
        });
    };
    
    employeeService.get = function(criteria) {
        return q.Promise(function(resolve, reject) {
            Employee.findAll(criteria, {
                raw: true
            }).then(function(data) {
                if(data.length === 0) return resolve(null);
                resolve(data);
            }).error(function(err){
                reject(err);
            });
        });
    };

    return employeeService;
};
