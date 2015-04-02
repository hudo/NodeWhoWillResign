{"filter":false,"title":"factory.js","tooltip":"/learning/design-pattern/factory.js","undoManager":{"mark":33,"position":33,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":8,"column":46},"action":"insert","lines":["function Profiler(label) {","     this.label = label;","     this.lastTime = null;","}","   Profiler.prototype.start = function() {","     this.lastTime = process.hrtime();","}","   Profiler.prototype.end = function() {","     var diff = process.hrtime(this.lastTime);"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":46},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":5},"action":"insert","lines":["     "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":13,"column":0},"action":"insert","lines":["console.log('Timer \"' + this.label + '\" took '","       + diff[0] + ' seconds and '","       + diff[1] + ' nanoseconds.');","}",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"remove","lines":[" "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[" "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"remove","lines":["   "]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"remove","lines":[" "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["   "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":[" "]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"remove","lines":[" "]},{"start":{"row":9,"column":50},"end":{"row":10,"column":6},"action":"remove","lines":["","      "]},{"start":{"row":9,"column":78},"end":{"row":10,"column":6},"action":"remove","lines":["","      "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":1},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":2},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":2},"end":{"row":13,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["module.exports = function(label) {","     if(process.env.NODE_ENV === 'development') {","       return new Profiler(label);        //[1]","     } else if(process.env.NODE_ENV === 'production') {","       return {             //[2]","         start: function() {},","         end: function() {}","}","} else {","       throw new Error('Must set NODE_ENV');","     }","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":46},"end":{"row":16,"column":47},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":45},"end":{"row":16,"column":46},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":44},"end":{"row":16,"column":45},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":43},"end":{"row":16,"column":44},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":42},"end":{"row":16,"column":43},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":41},"end":{"row":16,"column":42},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":40},"end":{"row":16,"column":41},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":36},"end":{"row":16,"column":40},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":35},"end":{"row":16,"column":36},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":31},"end":{"row":18,"column":32},"action":"remove","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":24},"end":{"row":18,"column":28},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":20},"end":{"row":18,"column":24},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":16},"end":{"row":18,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"remove","lines":[" "]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":[" "]},{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":[" "]},{"start":{"row":17,"column":4},"end":{"row":18,"column":1},"action":"insert","lines":["}"," "]},{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"remove","lines":["}"]},{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":[" "]},{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":[" "]},{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":[" "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["   "]},{"start":{"row":21,"column":9},"end":{"row":21,"column":12},"action":"insert","lines":["   "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":8},"action":"insert","lines":["        "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":5},"end":{"row":24,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":[" "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":[" "]},{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":30},"end":{"row":21,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427503550387,"hash":"991b2075fd62144793309a2cd740647a74f3ff11"}