function findMaxProfit(arr) {
    let finalArr = [];
    let count = 0;
    let i = 0;
    let n = arr.length;
    while(i < n - 1) {
        while(i < n && (arr[i] >= arr[i + 1])) i++;
        if( i == n - 1) return 'no element found';
        finalArr.push({ 'buy':i++ });
        while(i < n && (arr[i - 1] <= arr[i])) i++;
        finalArr[count]['sell'] = i - 1;
        count++;
    }
    return finalArr.reduce((acc, currVal) => acc + arr[currVal.sell] - arr[currVal.buy], 0)
}

findMaxProfit([100, 180, 260, 310, 40, 535, 695]);