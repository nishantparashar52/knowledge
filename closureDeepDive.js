// closure deep dive


// create inbuilt inBetween function such that inBetween [1,2,3,4,5] [3,5] => [4]

function inBetween(start, end) {
    return function(x) {
        return x > start && x < end;
    }
}


let arr = [1,2,3,4,5,6]
arr.filter(inBetween(1,5));

function matching(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

arr.filter(matching(1,5));


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));


  // sort by key

function byField(fieldName) {
    return function (a,b) {
        return a[fieldName] > b[fieldName] ? 1 : -1
    }
}

// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.


function f(x) {
    alert(x);
  }
  
  // create wrappers
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}