var cluster = require("cluster");
var os = require("os");

if (cluster.isMaster) {
    cluster.on('exit', function(worker, code) {
        if (code != 0 && !worker.suicide) {
            console.log('Worker crashed. Starting a new worker');
            cluster.fork();
        }
    });

    process.on('SIGUSR2', function() {
        console.log('Restarting workers');
        var workers = Object.keys(cluster.workers);

        function restartWorker(i) {
            if (i >= workers.length) return;
            var worker = cluster.workers[workers[i]];
            console.log('Stopping worker: ' + worker.process.pid);
            worker.disconnect();
            worker.on('exit', function() {
                if (!worker.suicide) return;
                var newWorker = cluster.fork();
                newWorker.on('listening', function() {
                    restartWorker(i + 1);
                });
            });
        }
        restartWorker(0);
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

//test zero downtime 
//ps af (get the pid number)
//kill -SIGUSR2 <PID>