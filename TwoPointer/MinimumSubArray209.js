function MinimumSubArray(arr, target) {
    let left = 0, right = 0, sum, max = Number.POSITIVE_INFINITY;
    while(left !== arr.length) {
        if(left === right) sum = arr[left];
        if(sum < target && right <= arr.length) {
            right++;
            sum += arr[right]; 
        }
        else {
            max = Math.min(max, right - left);
            left++;
            sum = arr[left];
        }
    }
    return max;
}