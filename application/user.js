var hash = require('../utils/pass').hash;
var q = require("q");

module.exports = function user(db) {
    var userService = {};

    userService.exists = function(username) {
        return q.Promise(function(resolve, reject, notify) {
            db.serialize(function() {
                db.get("select count(*) as count from users where username = ?", username, function(err, row) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        console.log(row.count);
                        var exists = row.count > 0;
                        resolve(exists);
                    }
                });
            });
        });
    };

    userService.create = function(username, password) {
        return q.Promise(function(resolve, reject, notify) {
            userService.exists(username).then(function(exists, err) {
                if (err) throw err;
                if (!exists) {
                    hash(password, function(err, salt, hash) {
                        if (err) throw err;
                        db.serialize(function() {
                            db.run("insert into users (username, password, salt) values(?, ?, ?)", username, hash, salt, function(err) {
                                if (err) throw err;
                            });
                        });
                    });
                    resolve(true);
                }
                else {
                    reject("User already exists");
                }
            });
        });
    };

    userService.isValid = function(username, password) {
        return q.Promise(function(resolve, reject, notify) {
            
            getSalt(username)
            .then(function(salt) {
                var deferred = q.defer();
                hash(password, salt, function(err, hash) {
                    if (err) return deferred.reject(err);
                    deferred.resolve(hash);
                });
                return deferred.promise;
            })
            .then(function(hash){
                checkHash(username, hash).then(function(passwordValidated){
                   if(passwordValidated) return resolve(true);
                   reject("Invalid password");
                });
            }).fail(function(failure){
                reject(failure);
            });
        });
    };

    function checkHash(username, hash) {
        return q.Promise(function(resolve, reject){
            db.serialize(function() {
                db.get("select count(*) as count from users where username = ? and password = ?", username, hash, function(err, row) {
                    if (err) return reject(err);
                    resolve(row.count > 0);
                });
            });    
        });
    }
    
    function getSalt(username) {
        return q.Promise(function(resolve, reject){
            db.serialize(function() {
                db.get("select salt from users where username = ?", username, function(err, row) {
                    if (err) return reject(err);
                    if(row == undefined) return reject("user not found");
                    resolve(row.Salt);
                });
            });    
        });
    }

    return userService;
};