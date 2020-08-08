const composedFn = (...args) => arg => args.reduce((acc, currVal) => currVal(acc), arg);

const add5 = arg => Number(arg) + 5;

const square = arg => arg * arg;

const double = arg => arg * 2;

var comp = composedFn(add5, square, double);
comp(5);


const multipleCurryFn = a => b => c => a + b + c


/* Impure vs Pure Fn */
let numberArr = [];

const impureFn = num => numberArr.push(num);
const pureFn = num => argNumArr = argNumArr.concat([num]);

var imp = impureFn(6);
numberArr;
var pure = pureFn(7)(numberArr);
numberArr;



/* Memoization */
const Memoization = () => {
    let cache = {};
    return val => {
        if(val in cache)  return `in cache ${cache[val]}`;
        let result = val + 20;
        cache[val] = result;
        return result;
    }
}

var add = Memoization();
add(5);

const Welcome = name => greeting = message => console.log(message + ' ' + name);

document.cookie = "username=John";


/* Promise Chaining */
new Promise((resolve, reject) => {
    setTimeout(() => resolve, 1000);
}).then( result => {console.log(result); return result * 2;}).then(result => result * 2);

document.getElementById('item').addEventListener('click', ev => ev.preventDefault());