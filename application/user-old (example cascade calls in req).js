var hash = require('../utils/pass').hash;
var db = require("../application/db");
var q = require("q");

exports.exists = function(username) {
    return q.Promise(function(resolve, reject, notify){
        db.serialize(function() {
            db.get("select count(*) as count from users where username = ?", username, function(err, row) {
                if (err) {
                    reject(err);
                } else {
                    console.log(row.count);
                    var exists = row.count > 0;
                    resolve(exists);
                }
            });
        });
    });
};

exports.create = function(username, password) {
    hash(password, function (err, salt, hash) {
        if (err) throw err;
        db.serialize(function() {
            db.run("insert into users (username, password, salt) values(?, ?, ?)", username, hash, salt, function(err){
                if(err) throw err;
            });
        });
    });
}