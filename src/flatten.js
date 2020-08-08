function flatten(arr) {
    var outputArr = [];
    function recursiveArr(inputArr = arr) {
        for(let i = 0, len = inputArr.length; i < len; i++) {
            if(Array.isArray(inputArr[i])) {
                recursiveArr(inputArr[i]);
            } else outputArr.push(inputArr[i]);
        }
    }
    return outputArr;
}

var flat = flatten(['12', 12, [3,4,5,[6,[7]]]]);
flat();

function* flatten(arr, indexArr = arr) {
    for(let i = 0, len = inputArr.length; i < len; i++) {
        if(Array.isArray(inputArr[i])) {
            recursiveArr(inputArr[i]);
        } else outputArr.push(inputArr[i]);
    }
}

function flatArr(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, current) => acc.concat(Array.isArray(current) ?  flatArr(current, d - 1 ) : val), []) : arr.slice();
};

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };
flatten.reduce((acc, currValue) => acc.concat(currValue), []);


function* flatten(arr, depth) {
    if (depth === undefined) {
        depth = 1;
    }
    for(let i = 0, len = arr.length; i < len; i++) {
        if(Array.isArray(arr[i]) && depth > 0) {
            yield* flatten(arr[i], depth - 1);
        } else yield arr[i];
    }
}

function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const item of array) {
        if(Array.isArray(item) && depth > 0) {
          yield* flatten(item, depth - 1);
        } else {
          yield item;
        }
    }
}