var sqlite3 = require('sqlite3').verbose();
var q = require("q");
var hash = require('../utils/pass').hash;

var db = new sqlite3.Database('../data/whowillresign');

function getHash(username, password) {
    return q.Promise(function(resolve, reject) {
        hash(password, function(err, salt, hash) {
            if (err) return reject(err);
            resolve({
                salt: salt,
                hash: hash
            });
        });
    });
}

function adminExists() {
    return q.Promise(function(resolve, reject) {
        db.serialize(function() {
            db.get("select count(*) as count from users where username = 'jd'", function(err, exists) {
                if(err) return reject(err);
                resolve(exists.count > 0);
            });
        });
    });
}

exports.initialize = function() {
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS Users (Id INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT, Salt TEXT, IsAdmin INTEGER default 0)");

        adminExists().then(function(exists) {
            if (exists) return;
            return getHash('jd', 'admin');
        }).then(function(pwd) {
            db.run("insert into users(Username, Password, Salt, IsAdmin) values('jd', ?, ?, 1)", pwd.hash, pwd.salt, function(err){
                if(err) throw err;
            });
        });
    });
};