var express = require('express');
var router = express.Router();
var userService = require("../application/user");
var passport = require('passport');
var jwt = require("jwt-simple")
var configuration = require("../application/configuration")
var moment = require("moment");

router.get('/create', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/create', function(req, res) {
    console.log(req.body);
    userService().create(req.body.username, req.body.password)
        .then(function(result, err) {
            if(err) {
                console.log(err);
                return res.status(401).json({ error: err });
            };
            console.log(result);
            return res.status(200).json({ message: "User successfully created" });
        })
        .fail(function(failure){
            console.log(failure);
            return res.status(409).json({ error: failure });
        });
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user.isAuthenticated) {
        return res.status(401).json({ error: 'Username or Password invalid' });
    }

    var expires = moment().add(7, 'days').valueOf();
    console.log(expires);
    var token = jwt.encode({
        username: req.body.username,
        expires: expires,
        isAdmin: user.isAdmin
    }, configuration.securityPassPhrase);
    
    res.json({ token : token, expires: expires, username: req.body.username, isAdmin: user.isAdmin });

  })(req, res, next);
});

module.exports = router;
