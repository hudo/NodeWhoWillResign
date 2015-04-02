{"filter":false,"title":"tryProfiler.js","tooltip":"/learning/design-pattern/factory/tryProfiler.js","undoManager":{"mark":42,"position":42,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":10,"column":23},"action":"insert","lines":["var profiler = require('./profiler');","   function getRandomArray(len) {","     var p = profiler('Generating a ' + len + ' items long array');","     p.start();","     var arr = [];","     for(var i = 0; i < len; i++) {","       arr.push(Math.random());","     }","p.end(); }","   getRandomArray(1e6);","   console.log('Done');"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"remove","lines":["   "]},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":[" "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":[" "]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"remove","lines":[" "]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"remove","lines":[" "]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":[" "]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":[" "]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"remove","lines":[" "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"remove","lines":[" "]},{"start":{"row":9,"column":12},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["   "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["   "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":20},"end":{"row":13,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":58},"action":"insert","lines":["export NODE_ENV=development; node profilerTest"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":46},"end":{"row":14,"column":58},"action":"remove","lines":["profilerTest"]},{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":47},"end":{"row":14,"column":48},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":48},"end":{"row":14,"column":49},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":49},"end":{"row":14,"column":50},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":50},"end":{"row":14,"column":51},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":51},"end":{"row":14,"column":52},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":52},"end":{"row":14,"column":53},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":53},"end":{"row":14,"column":54},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":57},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":45},"action":"insert","lines":["export NODE_ENV=production; node profilerTest"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":45},"end":{"row":15,"column":57},"action":"remove","lines":["profilerTest"]},{"start":{"row":15,"column":45},"end":{"row":15,"column":56},"action":"insert","lines":["tryProfiler"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":56},"end":{"row":15,"column":56},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427542506594,"hash":"9c1a589590cbe7762c17aff155401c64f1822d66"}