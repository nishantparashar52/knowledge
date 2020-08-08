// i + j / 2 < less upper two rows 
// > greater lower two rows
// Again
// check with middle 

// [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]


// [Math.floor(low + high/2), Math.floor(low + high /2)]

// 6 < 11
// low = i/2 + 1;
// else high = i - 1;
// [Math.floor(i/2 + i)/2, Math.floor(j/2 + j)/2]


// find element in sorted matrix

var mat = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
function matrixElem(elem, matrix, start = 0, end = matrix.length) {
    let rowHigh = matrix.length;
    let columnHigh = matrix[0].length;
    const middleElem = matrix[Math.floor((start + rowHigh)/2)][Math.floor((start + columnHigh)/2)];
    const middleIndex = [Math.floor((start + rowHigh)/2),Math.floor((start + columnHigh)/2)];
    const [ low, high ] = middleIndex;
    if (middleElem > elem)  return matrixElem(elem, matrix, low + 1, end);
    else if(middleElem < elem) return matrixElem(elem, matrix, start, high - 1);
    else return `${middleElem} found at index ${middleIndex}`
}

function binarySearch(elem, arr, start = 0, end = arr.length) {
    const middleElem = arr[Math.floor((start + end)/2)];
    const middleIndex = Math.floor((start + end)/2);
    if(middleElem < elem) return binarySearch(elem, arr, middleIndex + 1, end);
    else if(middleElem > elem) return binarySearch(elem, arr, start, middleIndex - 1);
    else return `${middleElem} found at index ${middleIndex}`
}

function matrixElem(elem, matrix, start = 0) {
    const middleElem = matrix[Math.floor((start + rowHigh)/2)];
    const middleIndex = [Math.floor((start + rowHigh)/2),Math.floor((start + columnHigh)/2)];
    const [ low, high ] = middleIndex;
    if (middleElem > elem)  return matrixElem(elem, matrix, low + 1, end);
    else if(middleElem < elem) return matrixElem(elem, matrix, start, high - 1);
    else return `${middleElem} found at index ${middleIndex}`
}