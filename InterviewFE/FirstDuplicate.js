function firstDuplicate(arr) {
    let duplicateArr = Array(arr.length).fill(0);
    for(let i =0; i<arr.length;i++) {
        if(arr[i] < 1 || arr[i] > arr.length) return false;
        if(duplicateArr[arr[i] - 1] === 1) return arr[i];
        else duplicateArr[arr[i] - 1] += 1;
    }
    duplicateArr = [];
}

function rotateImage(arr) {
    if(arr.length !== arr[0].length) return null;
    for(let i = 0; i< arr.length; i++) {
        for(let j = i; j < arr.length;j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
        }
    }
    return a[i][j];
}

rotateImage([[1,2,3], [4,5,6], [7,8,9]]);

firstDuplicate([1,2,3,1,2,3]);