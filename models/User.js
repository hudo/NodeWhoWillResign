"use strict";

module.exports = function(sequelize, dataTypes) {
    var User = sequelize.define("User", {
        id: dataTypes.INTEGER,
        username: dataTypes.STRING,
        password: dataTypes.BLOB,
        salt: dataTypes.BLOB,
        isAdmin: dataTypes.BOOLEAN
    });

    return User;
};
