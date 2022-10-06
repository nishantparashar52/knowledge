function RotatedSortedArr(a, target) {
    let start = 0, end = a.length - 1;
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        if(a[mid] === target) return mid;
        if(a[start] <= a[mid]) {
            if(a[start] <= target && a[mid] > target) {
                end = mid -1; 
            } else start = mid + 1;
        } else {
            if(a[end] >= target && a[mid] < target) {
                start = mid + 1;
            } else end = mid -1;
        }
    }
    return -1;
}

export default RotatedSortedArr;