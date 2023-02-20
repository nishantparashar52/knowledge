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


function compose(...fns) {
    return function(initial) {
        return fns.reduceRight((acc, curr) => {
            acc = curr(acc);
            return acc;
        }, initial);
    }
}
const plus = (a) => (b) => b + a
const minus = (a) => (b) => b - a;
const multiply = (a) => (b) => b * a;

const result = compose(plus(5), minus(10), multiply(2))

// 10 * 2 - 10 + 5 = 15
console.log(result(10)) // 15
