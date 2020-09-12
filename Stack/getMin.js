// [16, 15, 40, 20]

// Will get this done in next commit

// function getMinStack(item) {
//     let stack = [], min = item[0];
//     for(let i = 0, len = item.length; i < len; i++) {
//         min = Math.min(min, item[i]);
//         stack.push(min);
//     }
// }

// function getCombinations(str, prefix, k) {
//     let finalArr = [];
//     function innerFn(str, prefix, k) {
//         if(k.length === 0) return finalArr.push(prefix);
//         for(let i = 0, len = str.length; i < len; i++) {
//             let sliceIndex = str.slice(0, i) + str.slice(i + 1);
//             for(let permutation of getCombinations(str, sliceIndex, k - 1)) 
//         }
//     }
//     innerFn(str, prefix, k);
// }
// getCombinations('ab', '', 3);

// function printAllKLengthRec(set, finalList = [], n, k) {

//     if (k == 0) return finalList;
//     for (let i = 0; i < n; ++i) { 

//         // Next character of input added 
//         let newPrefix = prefix + set[i];
//         finalList.push(newPrefix);
//         printAllKLengthRec(set, finalList, n, k - 1);  
//     }
// }