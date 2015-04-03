var sequelize = require("sequelize");
var Employee = require("../model/Employee");
var orm = require("../data/orm");

module.exports = function() {
    var employeeService = {};
    
    employeeService.getAll = function(){
        Employee.findAll({order: 'name ASC'}).then(function(data){
            return data;
        });
    }
    
    return employeeService;
}

