function duplicateArr(arr) {
    const finalArr = [];
    for(let i = 0, len = arr.length; i < len;) {
        for(let j = i + 1; j > i; j++) {
            if(arr[i] !== arr[j]) {
                finalArr.push(arr[i]);
                i = j;
                break;
            }
        }
    }
    return finalArr;
}

duplicateArr([1,2,2,2,3,3,3,3]);


function findIndex(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        const middle = Math.floor((start + end)/2);
        if(arr[middle] === 1 && arr[middle - 1] === 0) return middle;
        else if(arr[middle] === 1) end = middle - 1;
        else start = middle + 1;
    }
}

findIndex([0,0,0,0,0,1,1]);