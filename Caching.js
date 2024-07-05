function Caching(fn, context) {
    let cache = {};
    return function(...args) {
        const arguments = JSON.stringify(args);
        if(!cache[arguments]) {
            cache[arguments] = fn.call(context || this, ...args);
        }
        return cache[arguments];
    }
}
const multiplication = (a,b) => {
    for(let i =0; i< 10000000 ; i++) {}
    return a * b;
}

let start = Date.now();
multiplication(4,5);
let end = Date.now();
multiplication(4,5)
multiplication(4,5)
console.log(`${end - start}ms`);
console.timeEnd('second call');

let implementCaching = Caching(multiplication);

let start = Date.now();
implementCaching(4,6);
implementCaching(4,6);
let end = Date.now();
console.log(`${end - start}ms`);



// infinite currying

add(5)(2)(3)()

function add(arg) {
    return function insideFunction(arg1){
        return arg1 ? insideFunction(arg + arg1) : arg;
    }
}