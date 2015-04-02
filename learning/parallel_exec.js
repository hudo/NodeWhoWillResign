function task(val, callback){
    console.log(val + ' started')
    setTimeout(function(){
        console.log(val + ' executed');
        callback('completed')
    }, parseInt(val + "000"));
}

var tasks = [1,2,3,4,5,6,7,8,9,10]

var completed = 0;

tasks.forEach(function(item){
   task(item, function(){
      completed++;
      if(completed === tasks.length)
        console.log('all executed');
   });
});