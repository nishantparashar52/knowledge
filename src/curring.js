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


sum(10)(20)(30)()

function sum(arg) {
    return function (b) {
        return b ? sum(arg + b) : arg;
    }
}

function currying(fn, ...args) {
    return function (...args1) {
        if(!args) fn(...arr);
        else args.concat(...args1);
    }
}

function sum(arg) {
    let finalSum = arg;
    return function innerFn (b) {
        if(arguments.length) {
            finalSum += b;
            return innerFn;
        }
        return finalSum;
    }
}


function sum(arg){
    return function (arg1){
        return arg1 ? sum(arg + arg1) : arg;
    }
}


var sum1 = sum(10);
sum1(20, 30);

function sum(a, b, c, d) {
    return a + b + c + d;
}


curry(10,20);

const curryied = curry(sum);
function curry(fn){
    return function curried (...arg) {
        if(fn.length <= arg.length) return fn(arg);
        return function (...args2) {
            return curried.apply(arg.concat(...args2));
        }
    }
}


const curry = (fn, ...args) =>
args.length >= fn.length ? fn.apply(this, ...args) : (...x) => curry(fn, ...args, x);

function calculation(a,b,c){
    return a*b/c;
  }
  
  var a = 10, b= 20, c= 5;
  
  var partialize1 = partialize(calculation, a);
  partialize1(b,c)
  
  var partialize2 = partialize(calculation, a, b);
  partialize2(c)
  
  var partialize3 = partialize(calculation, a, b, c);
  partialize3()


  function partialize(fn, ...arg) {
      return function (...arg1) {
          return fn(...arg, ...arg1);
      }
  }

  const isEven = num => num % 2 === 0;
  const isOdd = num => num % 2 !== 0;
  const numbers = [1,2,3,4,5];
  const double = num => num * 2;

  const add = a => b => a + b;

  const add1 = function(a) {
    return function (b) {
        return a + b;
    }
  }
  // filter all even numbers 


  numbers.filter(isEven).map(double);

  // add 10 to each number and get total sum

  numbers.map(add1(10)).reduce((acc, curr) => acc + curr,0);
