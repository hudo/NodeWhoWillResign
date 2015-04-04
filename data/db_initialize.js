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

function employeeExists(name) {
    return q.Promise(function(resolve, reject) {
        db.serialize(function() {
            db.get("select count(*) as count from employees where Name = ?", name, function(err, exists) {
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
        
        db.run("CREATE TABLE IF NOT EXISTS Employees (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quote FLOAT DEFAULT 0, totalBet INTEGER DEFAULT 0, createdAt DATETIME Default CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP)");
        
        var employees = ['Lyall', 'Vitali', 'Filippo', 'Radek', 'Paul', 'Gennaro', 'Sean', 'Hudo', 'Bogdan', 'Artur', 'Louise ?', 'Louise H.', 'Denis'];
        
        employees.forEach(function(name){
            employeeExists(name).then(function(exists){
                if (exists) return;
                db.run("insert into employees(Name, Quote) values(?, 250)", name, function(err){
                    if(err) throw err;
                });
            });    
        });
    });
};