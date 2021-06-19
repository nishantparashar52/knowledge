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

Pivot([1,7,3,2,5,6]);
/* 
28 - 1 = 27 * 2 + 1

27 - 7 = 20 * 2 + 7

20 - 3 = 17 * 2 + 3 

17 - 2 = 15 * 2 + 2 = 32

15 - 5 = 10 * 2 + 5 = */
