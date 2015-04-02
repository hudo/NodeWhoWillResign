var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var user = require("./user");
var db = require("./db");

module.exports = new LocalStrategy(
    function(username, password, done) {
        user(db).isValid(username, password).then(function(result, err) {
            if (err) return done(err);
            if (!result.isValid) return done(null, false, {
                message: 'Username or password invalid'
            });
            return done(null, {
                isAuthenticated: true,
                isAdmin: result.isAdmin
            });
        }).fail(function(failure){
            return done(null, false, {
                message: failure
            });
        });
    }
);