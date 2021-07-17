var compose = (...fns) => x => {
    debugger;
    return fns.reduceRight((currentValue, currentFn) => {
        debugger;
        return currentFn(currentValue);
    }, x);
}


var pipe = (...fns) => x => {
    return fns.reduce((value, fn) => fn(value), x);
}