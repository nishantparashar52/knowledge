function Pivot(arr) {
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    let sum = totalSum;
    let i = 0;
    while(i < arr.length - 1) {
        sum -= arr[i];
        if(sum * 2 + arr[i] === totalSum) return i;
        else i++;
    }
}

Pivot([1,7,3,6,5,6]);