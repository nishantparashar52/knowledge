function reducer(reduce, initial, arr) {
    let acc = initial;
    for(let i =0, {length} = arr; i< length;i++) {
        acc = reduce(acc, arr[i]);
    }
    return acc;
}

// console.log(reducer((acc, curr) => acc += curr, 0, [1,2,3,5,6]));
console.log(reducer((acc, curr) => acc += curr, 0, [1,2,3,5,6]));
// const filter = (fn, arr) => reduce((acc, curr) => fn(curr) ? acc.concat(curr) : acc, [], arr);
// filter(,[],[1,2,[3,[4,[5]]]])


// currying

function Avg(...n) {
    let total = 0;
    for(let i = 0; i<n.length;i++) {
        total += n[i];
    }
    return total / (n.length);
}

console.log(Avg(1,2,3,4,5));

function curry(fn, ...n) {
    return function(...n1) {
        return fn.apply(this, n.concat(n1));
    }
}

let n1 = curry(Avg, 5,5,5,5);
console.log(n1(5,6,7));


function curry1(func) {
    return function curried(...n) {
        if(func.length <= n.length) return func(...n);
        return function(...n1) {
            return curried(...n, ...n1);
        }
    }
}

const sum = (a,b,c) => a + b +c;

const curried = curry1(sum);
console.log(curried(1,10)(20));