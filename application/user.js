var hash = require('../utils/pass').hash;
var q = require("q");
var User = require("../models").User;

module.exports = function user() {
    var userService = {};

    userService.exists = function(username) {
        return q.Promise(function(resolve, reject) {
            User.count({
                where: {
                    username: username
                }
            }).then(function(count) {
                resolve(count > 0);
            }).error(function(err) {
                reject(err);
            });
        });
    };

    userService.create = function(username, password) {
        return q.Promise(function(resolve, reject, notify) {
            userService.exists(username).then(function(exists) {
                if (exists) return reject("User already exists");
                return createHash(password);
            }).then(function(hash){
                var user = User.build({
                    username: username,
                    password: hash.hash,
                    salt: hash.salt
                });
                return user.save();
            }).then(function(){
                resolve(true);
            }).fail(function(err){
                reject(err);
            });
        });
    };

    userService.isValid = function(username, password) {
        return q.Promise(function(resolve, reject, notify) {
            getSalt(username)
                .then(function(user) {
                    var deferred = q.defer();
                    hash(password, user.salt, function(err, hash) {
                        if (err) return deferred.reject(err);
                        deferred.resolve({
                            hash: hash,
                            isAdmin: user.isAdmin
                        });
                    });
                    return deferred.promise;
                })
                .then(function(user) {
                    checkHash(username, user.hash).then(function(passwordValidated) {
                        if (passwordValidated) return resolve({
                            isValid: true,
                            isAdmin: user.isAdmin
                        });
                        reject("Invalid password");
                    });
                }).fail(function(failure) {
                    reject(failure);
                }
            );
        });
    };
    
    userService.getHash = function(username, password) {
        return q.Promise(function(resolve, reject) {
            hash(password, function(err, salt, hash) {
                if (err) return reject(err);
                resolve({
                    salt: salt,
                    hash: hash
                });
            });
        });
    };

    function checkHash(username, hash) {
        return q.Promise(function(resolve, reject) {
            User.count({where: {username: username, password: hash}})
                .then(function(count){
                    resolve(count > 0);
                })
                .error(function(err){
                    reject(err);
                }
            );
        });
    }

    function getSalt(username) {
        return q.Promise(function(resolve, reject) {
            User.find({where:{username: username}}, {raw:true})
                .then(function(user){
                   resolve({
                       salt: user.salt,
                       isAdmin: user.isAdmin
                   }); 
                })
                .error(function(err){
                    reject(err);
                }
            );
        });
    }
    
    function createHash(password){
        return q.Promise(function(resolve, reject){
            hash(password, function(err, salt, hash){
               if(err) return reject(err);
               resolve({hash: hash, salt: salt});
            });
        });
    }

    return userService;
};