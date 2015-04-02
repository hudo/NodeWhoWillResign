var express = require('express');
var router = express.Router();
var user = require("../application/user");
var db = require("../application/db");
var passport = require('passport');
var jwt = require("jwt-simple")
var configuration = require("../application/configuration")
var moment = require("moment");

router.get('/create', function(req, res, next) {
  res.render('create_user');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/create', function(req, res) {
    console.log(req.body);
    user(db).create(req.body.username, req.body.password)
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
    if (!user) {
        return res.status(401).json({ error: 'Username or Password invalid' });
    }

    var expires = moment().add(7, 'days').valueOf();
    console.log(expires);
    var token = jwt.encode({
        username: req.body.username,
        expires: expires
    }, configuration.securityPassPhrase);
    
    res.json({ token : token, expires: expires, username: req.body.username });

  })(req, res, next);
});

module.exports = router;
