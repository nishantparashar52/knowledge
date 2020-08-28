const n = {
    name: 'nishant',
    getName: function() {
        return this.name;
    }
}

n.getName();
// to change into

var X = n.getName.bind(n);
X();


// polyfill of bind

Function.prototype.myBind = function(args) {
    var context = this;
    let arg = args.slice(1);
    return function(arg1) {
        context.apply(args[0], ...arg, ...arg1);
    }
}

const fullName = function(name, place) {
    console.log(name + 'name,place' + place);
}

var B1 = fullName.myBind('nishant', 'delhi');
B1('uk');


function Child(name, age) {
    this.name = name;
    this.age = age;
}

function Parent(name, age, hobbies) {
    Child.call(this, name, age);
    this.hobbies = hobbies;
}

console.log(new Parent('nishant', '20' , 'cricket'));


Array.prototype.myMap = function(cb) {
    let finalArr = [];
    for(let i = 0, len = this.length; i < len; i++) {
        finalArr.push(cb(this[i]));
    }
    return finalArr;
}

Array.prototype.mySome = function(cb) {
    for(let i = 0, len = this.length; i < len; i++) {
        if(cb(this[i])) return true;
    }
    return false;
}

Array.prototype.myReducer = function(fn, initialVal) {
    let acc = initialVal === undefined ? undefined : initialVal;
    for(let i = 0, len = this.length; i < len; i++) {
        if(acc !== undefined) acc = fn(acc, this[i]);
        else { acc = fn(this[i]);}
    }
    return acc;
}

function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(args), delay);
    }
}

function throttle(fn, delay) {
    let enableCall = true;
    return function(...args) {
        if(!enableCall) return;
        enableCall = false;
        fn(args);
        setTimeout(() => enableCall = true, delay);
    }
}

window.resize = debounce(() => console.log('resize debounce'), 100);
window.resize = throttle(() => console.log('resize throttle'), 100);

// throttle is to limit the calls atleast one per 100ms
// Debounce 1 execution per time frame;


function adder(x) {
    return function(y) {
        return x + y;
    }
}

var a1 = adder(1);
var a2 = adder(2);
a1(3);
a2(10);


<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>

let size12 = makeSize(12);
let size14 = makeSize(14);
let size16 = makeSize(16);

function makeSize(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    }
}


document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


Array.prototype.myReducer = function(fn, initialVal) {
    let acc = initialVal || undefined;
    for(let i = 0, len = this.length; i < len; i++) {
        if(acc !== undefined) acc = fn(acc, this[i]);
        acc = fn(this[i]);
    }
    return acc;
}

Array.prototype.myReducer = function(fn, initialVal) {
    this.forEach(item => {
        initialVal = initialVal !== undefined ? fn(initialVal, item) : item;
    });
    return initialVal;
}
