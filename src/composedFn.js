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