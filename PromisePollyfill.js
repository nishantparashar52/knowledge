function customPromise(cb) {
    let onResolve;
    let onReject;
    let fullfilled = false;
    let called = false;
    let value;
    function resolve(val) {
        value = val;
        fullfilled = true;
        if(typeof onResolve === 'function') {
            onResolve(val);
            called = true;
        }
    }
    this.then = function(fn) {
        onResolve = fn;
        debugger;
        if(fullfilled && !called) {
            onResolve(value);
            called = false;
        }
        return this;
    }

    this.catch = function(fn) {
        onReject = fn;
        called = false;
        fullfilled = true;
        return this;
    }
    cb(resolve);
}

let cd = (resolve, reject) => resolve(1);
new customPromise(cb).then(val => console.log(val))