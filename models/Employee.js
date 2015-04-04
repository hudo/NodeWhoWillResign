"use strict";

module.exports = function(sequelize, dataTypes) {
    var Employee = sequelize.define("Employee", {
        id: dataTypes.INTEGER,
        name: dataTypes.STRING,
        quote: dataTypes.FLOAT,
        totalBet: dataTypes.INTEGER
    });

    return Employee;
};
