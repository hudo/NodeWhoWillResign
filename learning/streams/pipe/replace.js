var ReplaceStream = require('../transform/replaceStream');
process.stdin
    .pipe(new ReplaceStream(process.argv[2], process.argv[3]))
    .pipe(process.stdout);
    
//Run it using the command echo Hello World! | node replace World Node.js