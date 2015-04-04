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

    return employeeService;
};
