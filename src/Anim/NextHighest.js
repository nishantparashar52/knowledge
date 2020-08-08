function nextH(arr, value) {
    let i = arr.length;
    while(arr[--i] > value);
    return ++i;
}

nextH([2,3,4,10,90], 1)

// sum of three numbers with sum 

// with two digits

function hashSum(arr, value) {
    const hashObj = {};
    for(let i = 0, len = arr.length; i < len; i++) {
        const arrVal = arr[i];
        hashObj[arrVal] = 1;
    }
    for(var key in hashObj) {
        const diff = hashObj[value - key];
        if(diff && hashObj.hasOwnProperty(value - key)) return [Number(key), value - key];
    }
}
// only works in sorted arr
function existArr(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        const combinedValue = arr[start] + arr[end];
        if(value > combinedValue) end--;
        else if(value < combinedValue) start++;
        else return [arr[start], arr[end]];
    }
}