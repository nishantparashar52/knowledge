const curry = fn => a => b => fn(a,b);

const sum = (a,b) => a + b;

const multiply = (a,b) => a * b;

const curried = curry(sum);
// console.log(`sum ${curried(10)(20)}`);
const mulCurried = console.log(curry(multiply)(100)(20));

// composedFn
const composedFn = (...args) => arg => args.reduce((acc, curr) => curr(acc), arg);

const subtract = arg => arg - 10;

const square = arg => arg * arg;
const answer = composedFn(subtract, square);
// console.log(answer(10,20));