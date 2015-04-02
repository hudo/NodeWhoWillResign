var TaskQueue = require("./task_queue");
var queue = new TaskQueue(2);

for(var i=0; i<50;i++){
    queue.pushTask(function(done){
        console.log("task pushed");
        done(); //commenting the done callback causes a thread to stop indefinitely, with done we notify the task is finished.
    });
}