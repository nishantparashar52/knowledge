function findMedian(a = [], b = []) {
    if(a.length > b.length) return findMedian(b, a);
    let x = a.length, y = b.length, low = 0, high = x;
    while(low <= high) {
        let partition1 = Math.floor((low + high) / 2);
        let partition2 = Math.floor((x + y + 1) /2) - partition1;
        let maxLeftX = partition1 === 0 ? Math.max() : a[partition1 - 1];  
        let minRightX = partition1 === x ? Math.min() : a[partition1];
        let maxLeftY = partition2 === 0 ? Math.max() : b[partition2 - 1];  
        let minRightY = partition2 === x ? Math.min() : b[partition2];
        if(maxLeftX < minRightY && maxLeftY < minRightX) {
            if((x + y) % 2 == 0) return Math.floor((Math.max(maxLeftX , maxLeftY) + Math.min(minRightX, minRightY)) / 2);
            else return Math.max(maxLeftX, maxLeftY)
        } else if(maxLeftX > minRightY) high = partition1 - 1;
        else low = partition1 + 1;
    }
}

findMedian([1, 3, 8, 9, 15, 18, 25, 30], [7, 10, 11, 19, 20, 21, 25,30])