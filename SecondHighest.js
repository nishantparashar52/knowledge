function secondHighest(arr) {
    let max = 0, sMax = 0;
    for(let i = 0, len = arr.length; i < len; i++) {
        if(max < arr[i]) {
            sMax = max;
            max = arr[i];
        } else if(sMax < arr[i] && sMax !== max) {
            sMax = arr[i]
        }
    }
    return sMax;
}