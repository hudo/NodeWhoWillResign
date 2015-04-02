{"filter":false,"title":"app.js","tooltip":"/learning/processPool/app.js","undoManager":{"mark":26,"position":26,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["var http = require('http');","var SubsetSum = require('./subsetSum');","//var SubsetSum = require('./subsetSumDefer');","//var SubsetSum = require('./subsetSumFork');","","http.createServer(function(req, res) {","  var url = require('url').parse(req.url, true);","  if(url.pathname === '/subsetSum') {","    var data = JSON.parse(url.query.data);","    res.writeHead(200);","    var subsetSum = new SubsetSum(url.query.sum, data);","    subsetSum.on('match', function(match) {","      res.write('Match: ' + JSON.stringify(match) + '\\n');","    });","    subsetSum.on('end', function() {","      res.end();","    });","    subsetSum.start();","  } else {","    res.writeHead(200);","    res.end('I\\m alive!\\n');","  }","}).listen(8000, function() {console.log('Started')});",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["//var SubsetSum = require('./subsetSumDefer');",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":2},"end":{"row":5,"column":4},"action":"insert","lines":["  "]},{"start":{"row":6,"column":2},"end":{"row":6,"column":4},"action":"insert","lines":["  "]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":[" "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":[" "]},{"start":{"row":10,"column":5},"end":{"row":10,"column":8},"action":"insert","lines":["   "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":6},"action":"insert","lines":["      "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":8},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":[" "]},{"start":{"row":14,"column":7},"end":{"row":14,"column":12},"action":"insert","lines":["     "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]},{"start":{"row":16,"column":4},"end":{"row":16,"column":8},"action":"insert","lines":["    "]},{"start":{"row":17,"column":2},"end":{"row":17,"column":4},"action":"insert","lines":["  "]},{"start":{"row":17,"column":5},"end":{"row":18,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":21,"column":2},"end":{"row":21,"column":4},"action":"insert","lines":["  "]},{"start":{"row":22,"column":28},"end":{"row":23,"column":4},"action":"insert","lines":["","    "]},{"start":{"row":23,"column":26},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":2},"end":{"row":26,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":9},"end":{"row":27,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":2},"end":{"row":29,"column":39},"action":"insert","lines":["curl -G http://localhost:8000/subsetSum --data-urlencode","\"data=[116,119,101,101,-116,109,101,-105,-102,117,-115,-97,119,-116,-","104,-105,115]\" --data-urlencode \"sum=0\""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":58},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":58},"end":{"row":27,"column":59},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":128},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["var SubsetSum = require('./subsetSum');",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":32},"end":{"row":19,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427581268716,"hash":"37f1c134426df270a6d313421b972b05a9e2c2e5"}