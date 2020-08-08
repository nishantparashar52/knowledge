function sum(arg) {
	return function(b) {
		return b ? Sum(arg + b) : arg;
	}
}
/* Sum(1)(2)(10)(100)(); */

Sum(1)(2)(10);

Sum(1)(2)(10)();


// setTimeout polyfill


// currying fn

function curry(fn) {
    return function (...args) {
        if(args.length >= fn.length) return fn.apply(this, args);
        else {
            return function (...args2) {
                return fn.apply(this, args.concat(args2));
            }
        }
    }
}

function sum(a,b,c) {
    return a + b + c;
}

var curried = curry(sum);

