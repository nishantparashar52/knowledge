// Problems solving

"ABC"
// Sum
// A = 0, B = 1, C = 1, D = B + C
// D = 2
// Sum is 0 + 1 + 1 = 2

function getSum(str) {
    let sumValue = 0;
    for(var i = 0, len = str.length; i < len; i++) {
        const itemValue = str.charCodeAt(i);
        sumValue += fibonacci(itemValue - 65);
    }
    return sumValue;
}
function fibonacci(itemVal) {
    let itemSum = 0;
    if(itemVal === 1) {
        return itemSum += 1;
    } else if(itemVal === 0) {
        return itemSum;
    } else {
        return fibonacci(itemVal - 1) + fibonacci(itemVal - 2);
    }
}
function fibonacci(itemVal) {
    if(itemVal <=1 ) return 1;
    else return fibonacci(itemVal - 1) + fibonacci(itemVal - 2);
}

getSum("ABC");

// three ways to do fibonacci
function getSum(num) {
    let a = 0,b = 1, temp;
    while(num > 0) {
        temp = b;
        b = a + b;
        a = temp;
        num--;
    }
    return b;
}

function getSum(num) {
    if(num <= 1) return num;
    return getSum(num - 1) + getSum(num - 2);
}

function getSum(num, memo) {
    memo = memo || {};
    if(memo[num]) return memo[num];
    else if(num <= 1) return 1;
    else return memo[num] = getSum(num - 1, memo) + getSum(num - 2, memo);
}


// Longest Sequence

function longestSequence(arr) {
    let largestSum = 0;
    let sum = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
        largestSum += arr[i];
        sum = Math.max(largestSum, sum);
    }
    return sum;
}
longestSequence([4,5,2,-10,-3,8]);

11


// Monkey takes 5 steps and slips 1 steps
// Total number of steps taken by monkey
// No of building
// Building height

function monkeySteps(forwardStep, slip, buildings, buldingHeight = []) {
    let totalSteps = 0;
    for(var i = 0, len = buildings; i < len; i++) {
        if(buldingHeight[i] < forwardStep) {
            totalSteps++;
        } else {
            totalSteps += getSteps(forwardStep, slip, buldingHeight[i]);
        }
    }
    return totalSteps;
}

function getSteps(forwardStep, slip, buldingHeight) {
    let count = 0;
    const height = buldingHeight - forwardStep + slip;
    if(height < forwardStep) {
        return ++count;
    } else {
        count++;
        return getSteps(forwardStep, slip, buldingHeight - height);
    }
}
monkeySteps(5,1,2, [10,9]);


5,1,10
10 - 4 === 6
6 < 5


function debounce(fn, delay, count) {
    let timer = 0;
    let count = 0;
    let context = this;
    return function(...args) {
        let later = () => {
            timer = null;
            fn.apply(context, args);
        }
        let throttle = () => {
            if(counter === count) {
                clearTimeout(timer);
                later();
            }
        }
        clearTimeout(timer);
        setTimeout(later, delay);
    }
}

// shadow dom

var shadow = elementRef.attachShadow({mode: 'open'});


// return new function

composedFn(add, subtract, mul);
const composedFn = (...args) => arg => args.reduce((acc, currentVal) => currentVal(acc),arg);