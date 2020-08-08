function calculation(a,b,c){
    return a*b/c;
}
var a = 10, b= 20, c= 5;
var partialize = function(fn, ...arg) {
    return function (...args) {
        return fn(...arg, ...args);
    }
}
// function partialize(fn, ...arg) {
//     return function (...args) {
//         return fn(...arg, ...args);
//     }
// }
  let partialize1 = partialize(calculation, a);
partialize1(b,c);
  
  var partialize2 = partialize(calculation, a, b);
  partialize2(c);
  
  var partialize3 = partialize(calculation, a, b, c);
  partialize3();