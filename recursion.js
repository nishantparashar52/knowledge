let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(1)(2)());

var sum = function (a) {
    return function (b) {
        return b ? sum(a + b) : a;
    }
}

// 

var sum = a => b => b ? sum(a + b) : a;

var a = newFn(b);
a.name = '10'

var newFn = function(fn, args) {
    const context = this;
    return new fn.apply(this, ...args);
}
var a1 = newFn(function(name) {this.name = name}, 'nishant');


// throttle

function throttledFn(fn, delay) {
    let flag = true;
    return function() {
        if(flag) {fn(); flag = false};
        setTimeout(function(){flag = true;},delay);
    }
}
throttledFn(function(){console.log('22')}, 100);

function throttleFn(fn, delay) {
    var flag = true;
    return function () {
        if (flag) {
            fn();
            flag = false;
        }
        setTimeout(function () {
            flag = true;
        }, delay);
    }
}
window.addEventListener('resize', throttleFn(function () {
    console.log('22')
}, 400));