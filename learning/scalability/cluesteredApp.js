var cluster = require("cluster");
var os = require("os");

if (cluster.isMaster) {
    cluster.on('exit', function(worker, code) {
        if (code != 0 && !worker.suicide) {
            console.log('Worker crashed. Starting a new worker');
            cluster.fork();
        }
    });
    var cpus = os.cpus().length;
    console.log("cpus: " + cpus);
    for (var i = 0; i < cpus; i++) {
        cluster.fork();
    }
}
else {
    require("./app");
}

//try it with  siege -c200 -t10S http://localhost:8080