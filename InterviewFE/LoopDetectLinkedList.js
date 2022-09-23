
class Node {
    constructor(head) {
        this.head = head;
        this.next = ''
    }
    loopDetect() {
        let slow = this.next;
        let fast = this.next.next;
        while(slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }
}

let L1 = new Node(1);
let L2 = new Node(2);
let L3 = new Node(3);
let L4 = new Node(4);
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L1;


L1.loopDetect();


function Anagram(str1, str2) {
   // for anagram 
   // if([...str1].length !== [...str2].length) return false;
    const strObj = [...str1].reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    const finalObj = [...str2].reduce((acc, curr) => {
        if(acc[curr]) acc[curr] = acc[curr] === 1 ? delete acc[curr] : acc[curr] - 1;
        return acc; 
    }, strObj);
    return Object.keys(finalObj).length;
}

console.log('anagram' + Anagram('intention', 'execution'));



function getName(n) {
    this.name = n;
    this.getN = () => {
        return this.name;
    }
}
var n = new getName("nishant");
console.log(n.getN());

const object = {
    name: 'hello',
    getHello: function() {
        console.log('hey' + this.name);
    }
}
setTimeout(object.getHello,1000);



function sum(...a) {
    if(a.length > 3) return 'more arguments';
    if(a.length === 3) return a.reduce((acc, curr) => acc + curr, 0);
    return function b(...b1){
        return sum(...a, ...b1);
    }
}


// console.log(sum(1,2)(3));
// console.log(sum(1)(2)(3));
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4));

// debouncing

function debouncing(fn, delay) {
    let timer = null;
    return function(context) {
        console.log(timer);
        clearTimeout(timer);
        timer = setTimeout(() => fn(context), delay);
    }
}
// window.onscroll = debouncing(function() {console.log('scrolling')}, 1000);


// maximum sub array
// [1,2,-1,3,-2] 5

function maxSumArray(arr) {
    let sum = 0;
    for(let i =0;i<arr.length;i++) {
        let curr = 0;
        for(let j = i; j< arr.length;j++) {
            curr += arr[j];
            sum = Math.max(curr, sum)
        }
    } 
    return sum;
}
// console.log(maxSumArray([1,2,-1,3,8,3,-10,16,-2]));

// O(n2)


function maxSumArrayOn(arr) {
    let continousSum = 0;
    let maxSoFar = arr[0];
    for(let i =0; i<arr.length;i++) {
        continousSum +=arr[i];
        if(continousSum < 0) {
            continousSum = 0;
        }
        if(continousSum > 0 && continousSum > maxSoFar) maxSoFar = continousSum
    }
    return maxSoFar;
}

console.log(maxSumArrayOn([1,8,-1,3,8,3,-10,-4,24,-2]));
console.log(maxSumArrayOn([1,8,1,3,8,-3,-10]));


// [1,2] {1:1, 2:2}

function convertArrToObj(arr){
    return arr.map(_item => {
        return {
            [_item]: _item
        }
    })
}
// console.log(convertArrToObj([10,212]))


function y() {
    for(var i =0; i< 10; i++) {
        // function j(i) {
        //     setTimeout(() => {
        //         console.log(i)
        //     }, 1000);
        // }
        // j(i);
        //approach 2
        (i => {
           setTimeout(() => {
                console.log(i)
            }, 1000); 
        })(i)
    }
}
// y();

// call stack microstack web api

// move zero to end

// [2,3,x`,50,5,0,2,0,3,0,21]

function movezeroToLast(arr) {
    let arr1 = [];
    let counter =0;
    for(let i =0; i<arr.length;i++) {
        if(arr[i] !== 0) arr1.push(arr[i]);
        else counter++;
    }
    for(let i =0; i < counter;i++) arr1.push(0);
    return arr1;
}
// approach 2

function movezeroToLast2(arr) {
    let c = 0
    for(let i =0; i<arr.length;i++) {
        if(arr[i] !== 0) {
            if(c !== i) [arr[c], arr[i]] = [arr[i], arr[c]];
            c++;
        }
    }
    return arr;
}
console.log('2nd approach' + movezeroToLast2([2,3,4,50,5,0,2,0,3,0,21]));

// array prototype

Array.prototype.myFilter = function(fn) {
    let arr = [];
    for(let i = 0; i<this.length;i++) {
        if(fn(this[i])) arr.push(this[i])
    }
    return arr;
}

// [1,2,3,4].myFilter(item => item > 0);

Array.prototype.myReduce = function(fn, defaultValue) {
    let acc = defaultValue === undefined ? undefined : defaultValue;
    for(let i = 0; i<this.length;i++) {
        if(acc !== undefined) acc = fn(acc, this[i]);

    }
    return acc;
}

//trapping rain water

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
function rainWater(arr) {
    if(arr.length <=2) {
        return 0;
    }
    let maxLeft = arr[0];
    let maxRight = arr[arr.length - 1];
    let waterStorage = 0;
    let left = 1;
    let right = arr.length - 1;
    while(left <= right) {
        if(maxLeft < maxRight) {
            if(arr[left] > maxLeft) {
                maxLeft = arr[left];
            } else waterStorage += maxLeft - arr[left];
            left++;
        } else {
            if(arr[right] > maxRight) {
                maxRight = arr[right];
            } else waterStorage += maxRight - arr[right];
            right--;
        }
    }
    return waterStorage
}

// console.log(rainWater([0,1,0,2,1,0,1,3,2,1,2,1]));

//curry functon


function totalSum(fn) {
    return function curried(...arg) {
        if(fn.length <= arg.length) {
            return fn(...arg);
        }
        return function (...arg1) {
            return curried(...arg, ...arg1);
        }
    }
}

const sumC = (a,b,c) => a + b + c;

let totalS = totalSum(sumC);
console.log(totalS(1)(2)(10));


function updateDom(elem) {
    return function(context) {
      document.getElementById(elem).innerHTML = context;  
    }
    //document.getElementById(elem).innerHTML = val;
}

// let dom = updateDom('hi');
// dom('hello nishant');
// // updateDom('h1', 'hello nishant');
// // updateDom('h1', 'hello urvashi');



//forEach and map
const arr  = [1,2,3];
const arrMap = arr.map(item => item + 1).filter(item => item > 2);
console.log(`${arrMap} arr${arr}`)
const arrForEach = arr.forEach(item => console.log(item + 1));
console.log(`${arrForEach} arr${arr}`);


//event delegation

document.getElementById('listItem').addEventListener('click', event => {
    console.log(event.target.innerHTML);
})

// flatten the array

// let arr =[1,2,[3,[4]]]

// arr.reduce((acc, curr) => {
//     if(Array.isArray(curr))
// })
// approach 1
function Flatten(arr, storedArr) {
    let finalArr = storedArr || [];
    for(let i =0; i< arr.length;i++) {
        if(Array.isArray(arr[i])) {
            return Flatten(arr[i], finalArr);
        } else finalArr.push(arr[i]);
    }
    return finalArr;
}
console.log(Flatten([1,2,[3,[4]]]));
[].concat(...arr);
//approach 2

function Flatten1(arr) {
return arr.reduce((acc, curr) => {
    if(Array.isArray(curr)) {
        return Flatten(curr)
    } else acc.push(curr);
}, []);
}

// compose polyfill
function addToFive(a) {
    return a + 5;
}
function SubtractThree(a) {
    return a - 3;
}
function MultiplyFour(a) {
    return a *4;
}

function compose(...func) {
    return function(b) {
        return func.reduceRight((acc, fn) => fn(acc) ,b);
    }
}
// console.log(compose(addToFive, SubtractThree, MultiplyFour)(4));

// ('abcf','abfr','cdfd','reer')

function Trie(...arr) {
    const Trie = {};
    arr.forEach(item => {
        item.forEach(list => {

        })
    })
}
function ImageData() {
    /* promise return img data resolve after x milliosecond*/
    return new Promise(resolve => {
      setTimeout(() => resolve({
imgUrl: `https://picsum.photos/200/300?${Math.random() * 1000}`,
        duration: Math.random() * (10 - 3) + 3}), Math.random() * (2000 - 500) + 500)
    })
}
function getData() {
    function innerFn() {
        Promise.all([ImageData(), ImageData()]).then(data => {
            showData(data);
            setTimeout(() => innerFn(), data[0].duration);
        })
    }
    innerFn();
}
// getData();
function showData(receiveData) {
    let imgSrc = document.getElementById('loadImage');
    for(let i = 0 ; i < receiveData.length;i++) {
        setTimeout(() => 
        imgSrc.src = receiveData[i].imgUrl , receiveData[i].duration);
    }
}

function slidingWindow(arr) {
    let sum = arr[0], maxSum = 0;
    for(let i = 0; i < arr.length;i++) {
        sum += (arr[i + 1] || 0) - (arr[i - 1] || 0);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}
slidingWindow(100, 200, 300, 400);