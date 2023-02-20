function KDistinctToys(arr, size) {
    let slow = 0, fast = 0, toys = {}, max = 0;
    // use fast and slow pointer in while loop

    while(fast !== arr.length) {
        let elem = arr[fast];
        toys[elem] = toys[elem] ? toys[elem] + 1: 1;
        if(Object.keys(toys).length <=2) fast++;
        else {
            if(toys[arr[slow]] > 1) {
                toys[arr[slow]] = toys[arr[slow]]- 1;
            } else delete toys[arr[slow]];
            slow++;
        }
        max = Math.max(max, fast - slow);
    }
    return max;
}

export default KDistinctToys;