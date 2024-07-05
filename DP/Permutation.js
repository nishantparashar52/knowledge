function Permutation (string) {
    if(string.length < 2) return string;
    let pc = [];
    for(let i = 0, len = string.length; i < len; i++) {
        const char = string[i];
        if(string.indexOf(char) != i) continue;
        const remainingStr = string.slice(0, i) + string.slice(i + 1, len);
        for(let permutation of Permutation(remainingStr)) {
            pc.push(char + permutation);
        }
    }
    return pc;
}

Permutation(['abc']);

function indexOfFirstOne(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        const middle = Math.floor((start + end)/2);
        if(arr[middle] === 1 && (middle === 0 || arr[middle - 1] === 0)) return `exist ${middle}`;
        else if(arr[middle] === 1) end = middle - 1;
        else start = middle + 1;
    }
    return 'not found';
}

[0,0,0,0,0,0,1,1];

function Permutation (string, k) {
    if(string.length < 2) return string;
    let pc = [];
    for(let i = 0, len = string.length; i < len; i++) {
        const char = string[i];
        if(string.indexOf(char) != i) continue;
        const remainingStr = string.slice(0, i) + string.slice(i + 1, len);
        for(let permutation of Permutation(remainingStr)) {
            pc.push(char + permutation);
        }
    }
    return pc;
}

Permutation('ab', 4);

function oddNumber(arr) {
    let obj = {};
    arr.reduce((acc, curr) => obj[curr] ? obj[curr] = obj[curr] + 1 : obj[curr] = 1, {});
    Object.values(obj).find(item => item % 2 !== 0 && item !== 0);
}
// simplest code for finding permutation
function Permutation (string, finalStr = "") {
    if(string.length === 0) {
        console.log(finalStr);
        return;
    }
    for(let i = 0, len = string.length; i < len; i++) {
        const char = string[i];
        const remainingStr = string.slice(0, i) + string.slice(i + 1, len);
        Permutation(remainingStr, finalStr + char);
    }
}