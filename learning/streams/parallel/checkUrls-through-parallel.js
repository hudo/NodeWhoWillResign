var fs = require('fs');
var split = require('split');
var request = require('request');
var throughParallel = require('through2-parallel');

fs.createReadStream(process.argv[2])
    .pipe(split())
    .pipe(throughParallel.obj({
        concurrency: 4
    }, function(url, enc, done) {
        if (!url) return done();
        var self = this;
        request.head(url, function(err, response) {
            self.push(url + ' is ' + (err ? 'down' : 'up') + '\n');
            done();
        });
    }))
    .pipe(fs.createWriteStream('results.txt'))
    .on('finish', function() {
        console.log('All urls were checked');
    });

//run node checkUrls.js urlsTest.txt