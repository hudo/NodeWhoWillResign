var express = require('express');
var router = express.Router();
var employeeService = require("../application/employee");
var responseHelper = require("../application/helpers/responseHelper");

router.get('/', function(req, res, next) {
    employeeService().getAll().then(function(employees) {
        responseHelper.responseOk(res, employees);    
    }).fail(function(err) {
        responseHelper.responseKo(res, err);
    });
});

module.exports = router;