const PairCheck = (arr,sum) => {
    arr.sort((a, b) => a - b);
    let first = 0;
    let last = arr.length - 1;
    while((arr[first] + arr[last]) !== sum) {
        if((arr[first] + arr[last]) < sum) first++;
        else last--;
    }
    console.log(`numbers ${arr[first]} ${arr[last]}`);
}
PairCheck([1, 4, 45, 6, 10, -8], 16);