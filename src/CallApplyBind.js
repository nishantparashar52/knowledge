
function printName(arg) {
    console.log(`Hi ${arg} ${this.name}`);
}
let obj = {name: 'nishant'}

printName.call(obj);

let obj1 = {
    n: 1,
    fn: function() {this.n}
}

Function.prototype.myCall = function(obj, ...args) {
    obj.fn = this;
    obj.fn(...args);
}


Function.prototype.myApply = function(obj, args) {
    obj.fn = this;
    obj.fn(args);
}

printName.myApply(obj, ['hello']);


Function.prototype.myBind = function(obj) {
    obj.fn = this;
    return function(...args) {
        obj.fn(...args);
    }
}

let l1 = printName.myBind(obj);
l1('hello');
