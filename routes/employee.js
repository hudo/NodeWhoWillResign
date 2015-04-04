var express = require('express');
var router = express.Router();
var employeeService = require("../application/employee");

router.get('/', function(req, res, next) {
    employeeService().getAll().then(function(employees) {
        res.status(200).json(JSON.stringify(employees)); //TODO convert in the model    
    }).fail(function(err) {
        res.status(400).json({ error: err }); //TODO create a error management module    
    });
});

module.exports = router;