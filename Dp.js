function gridTraveller(m,n, cache ={}) {
    const key = `${m}, ${n}`;
    if(cache[key]) return cache[key];
    if(m === 1 && n === 1) return 1;
    else if(m ===0 || n ===0) return 0;
    cache[key] = gridTraveller(m-1, n) + gridTraveller(m, n-1);
    return cache[key];
}

console.log(gridTraveller(2,3));


// const howSum and return the arr

function howSum(targetSum, numbers) {
    if(targetSum === 0) return [];
    else if(targetSum < 0) return null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            return [...remainderResult, num];
        }
    }
    return null;
}



function howSum(targetSum, numbers, memo ={}) {
    if(memo[targetSum]) return memo[targetSum];
    if(targetSum === 0) return [];
    else if(targetSum < 0) return null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum]  ;
}
howSum(7, [2,3]);

// return the shortest combination 
function howSum(targetSum, numbers) {
    if(targetSum === 0) return [];
    else if(targetSum < 0) return null;
    let currentShortest = null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            const combination = [...remainderResult, num];
            if(currentShortest === null || currentShortest.length < combination.length) {
                currentShortest = combination;
            }
        }
    }
    return currentShortest;
}
howSum(7, [2,3]);

howSum(100, [20,30,50]);


//// return the shortest combination using memo


function howSum(targetSum, numbers, memo) {
    if(memo[targetSum]) return memo[targetSum];
    if(targetSum === 0) return [];
    else if(targetSum < 0) return null;
    let currentShortest = null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            const combination = [...remainderResult, num];
            if(currentShortest === null || currentShortest.length > combination.length) {
                currentShortest = combination;
            }
        }
    }
    memo[targetSum] = currentShortest;
    return currentShortest;
}
howSum(7, [2,3]);
howSum(100, [20,30,50]);

// with memo
function howSum(targetSum, numbers, memo={}) {
    if(memo[targetSum]) return memo[targetSum];
    if(targetSum === 0) return [];
    else if(targetSum < 0) return null;
    let currentShortest = null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            const combination = [...remainderResult, num];
            if(currentShortest === null || currentShortest.length > combination.length) {
                currentShortest = combination;
            }
        }
    }
    memo[targetSum] = currentShortest;
    return currentShortest;
}
howSum(7, [2,3]);
howSum(100, [20,30,50]);


// can construct string from the target


// 'nishant', ['nis', 'hant', 's', 'fo']


function canConstruct(target, wordBank) {
    if(target === 0) return true;
    for(const word of wordBank) {
        if(target.indexOf(word) === 0) {
            const slicedWord = target.slice(word.length);
            if(canConstruct(slicedWord, wordBank) === true) return true;
        }
    }
    return false;
}
canConstruct('nishant', ['nis', 'hant', 's', 'fo']);



function canConstruct(target, wordBank, memo ={}) {
    if(memo[target]) return true;
    if(target === '') return true;
    for(const word of wordBank) {
        if(target.indexOf(word) === 0) {
            const slicedWord = target.slice(word.length);
            if(canConstruct(slicedWord, wordBank) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

canConstruct('nishant', ['nis', 'hant', 's', 'fo']);


// count how many times you can construct

function countCountruct(target, wordBank) {
    if(target === '') return 1;
    let totalCount = 0
    for(const word of wordBank) {
        if(target.indexOf(word) === 0) {
            // const slicedWord = target.slice(word.length);
            const numberOfWays = countCountruct(target.slice(word.length), wordBank);
            totalCount = totalCount + numberOfWays;
        }
    }
    return tot;
}

countCountruct('nishant', ['nish', 'ant', 'a', 'ni', 'an'])


// all construct of the string


function allConstruct(target, wordBank) {
    if(target === '') return [[]];
    let result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const noOfWays = allConstruct(target.slice(word.length), wordBank);
            const targetWays = noOfWays.map(item => [word, ...item]);
            result.push(...targetWays);
        }
    }
    return result;
}

allConstruct('purple', ['purp', 'le', 'pur', 'ple']);

// all construct memo


function allConstruct(target, wordBank, memo= {}) {
    if(memo[target]) return memo[target];
    if(target === '') return [[]];
    let result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const noOfWays = allConstruct(target.slice(word.length), wordBank);
            const targetWays = noOfWays.map(item => [word, ...item]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}

allConstruct('purple', ['purp', 'le', 'pur', 'ple']);



// fibonacci tabular data

function fibotabular(index) {
    const a = Array(index + 1).fill(0);
    a[1] = 1;
    for(let i = 0 ;i< index; i++) {
        a[i + 1] += a[i];
        a[i + 2] += a[i];
    }
    return a[index];
}
fibotabular(10)

// fiboannci with memo without recursion

function fibonacci(index) {
    const a = Array(index + 1).fill(0);
    a[1] = 1;
    const memo = {0: 0, 1: 1};
    for(let i = 0 ;i< index; i++) {
        memo[i + 1] += memo[i];
        memo[i + 2] += memo[i];
    }
    return memo[index];
}
 // without recursion
function movetraveller(m,n) {
    const a = Array(m + 1 * n + 1).fill(0);
}



//setInterval using setTimeout


function setIntervalFn() {
    return funtion setTimeout(() => {
        
    }, timeout);
};


// fund min in array k rotation

[6,7,8,9,1,2,3,4,5] // how many rotation // min element
6, 1, 5
function findKRotation(arr) {
    return function findRot(start, end) {
        if(a[start] < a[mid]) findRot(mid, end);
        else if(a[start] > a[mid]) findRot(start, mid);

    }
    let start = 0, end = arr.length - 1, mid = Math.floor(arr.length / 2);
    findRot(start, end);
}

function findGridTraveller(m,n) {
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n+1)).fill(0);

    table[1][1] = 1;
    for(let i=0; i< m;i++) {
        for(let j=0; j<n;j++) {
            const current = table[i][j];
            if(i + 1 <m)table[i+1][j] +=current;
            if(j+1 < n) table[i][j+1] +=current;
        }
    }
    return table[m][n];
}

function coinChange(coins, total) {
    let coinDpArr2d = Array.from(Array(coins.length), _ => Array(total).fill(0));
    for(let i of coins) {
        for(let j of totals) {
            if(j > i) {
                coinDpArr2d[i][j] = Math.min(coinDpArr2d[i - 1][j], 1 + coinDpArr2d[i][j- i]);
            }
            else coinDpArr2d = coinDpArr2d[i - 1][j];
        }
    }
    return coinDpArr2d[coins.length - 1][total - 1];
}