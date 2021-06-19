function curry(fn) {
    return function curried (...arg) {
        if(fn.length <= arg.length) return fn(arg);
            return function (...arg2) {
                return curried.apply(arg.concat(...arg2));
            }
        }
}


const curry = fn => (...arg) => fn.length <= arg.length ? fn.apply(this, ...arg) : (...x) => curry.apply(this, arg.concat(x));