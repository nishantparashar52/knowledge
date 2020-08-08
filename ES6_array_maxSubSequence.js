var arr = [-2, -3, 4, -1,  -2, 1, 5, -3];

-2, -5, -1, -2, -4, 3, 9, 6

// sum Largest sum

function maxSum(arr) {
    let continuouSum = 0;
    let finalMaxSum;
    let elem = [];
    for(let i = 0, len = arr.length; i < len; i++) {
        continuouSum += arr[i];
        if(continuouSum > 0) {
            finalMaxSum = Math.max(finalMaxSum, continuouSum);
        } else continuouSum = 0;
    }
    return finalMaxSum;
}

[-2, 0, 1, 3]  ===  [0, 1, 4, 9]

function Square(...args) {
    args.map(item => Math.pow(item, 2)).sort();
}

function Square(arr) {
    return arr.map(item => Math.pow(item, 2));
}

Sum(1) // 1
Sum(2) // 3
Sum(30) // 33



function Sum(a) {
    let hash = null;
    if(a && hash) return a + hash;
        return hash = b ? Sum(a + b) : a;
}