var express = require('express');
var router = express.Router();
var employeeService = require("../application/employee");

router.get('/', function(req, res, next){
    try{
        var employees = employeeService().getAll();
        res.status(200).json(JSON.stringify(employees)); //TODO convert in the model
    }catch(err){
        res.status(400).json({ error: err }); //TODO create a error management module
    }
});

module.exports = router;