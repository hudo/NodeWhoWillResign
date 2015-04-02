function* testGenerator(){
    yield 'uno';
    yield 'due';
    return 'tre';
}

var test = new testGenerator();
console.log(test.next());
console.log(test.next());
console.log(test.next());