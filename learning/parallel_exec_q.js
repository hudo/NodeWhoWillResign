var q = require("q");

function task(val) {
    return q.Promise(function(resolve) {
        console.log(val + ' started')
        setTimeout(function() {
            console.log(val + ' executed');
            resolve();
        }, parseInt(val + "000"));
    });
}

function done() {
    console.log('done');
}

var tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var promises = [];

tasks.forEach(function(item) {
    promises.push(
        task(item)
        .then(function() {
            return done();
        })
        .then(function(){
            console.log("post-done");
        }));
});

q.allSettled(promises).then(function() {
    console.log('all executed');
});