// var findMiddle = function(n, factor = 16) {
//     this.name = n;
//         if( this.name % factor === 0) {
//             return this.name;
//         } else if (this.name < factor) {
//             factor = factor/2;
//             middle(this.name, factor);
//         }
//         else {
//             return Math.floor(this.name/factor) * factor;
//         }
//     }
//     var n1 = findMiddle(2);
//     n1;


// https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

// longest subsequence 

var longestSequence = function(arr, length) {
    this.arr = arr;
    let sumSequence = [];
    let sequence = 0;
    for(const i = 0; i< length; i++) {
        sequence += arr[i];
        sumSequence.push(sequence);
    }
    sumSequence.some(function(index,value){
    })
}


