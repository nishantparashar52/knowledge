// Debounce function

let counter = 0 ;

const getResult = () => {
    console.log("counter", counter++);
}

const getData = (fn, delay) => {
    let timer;
    return function () {
        let ref = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
} 

const betterFunction = getData(getResult, 300);



// call apply bind

let name1 = {
    firstName: 'nisahnt',
    lastName: 'parashar'
};

const fullName = function(place, place2) {
    console.log(this.firstName+ ',' + this.lastName + ', ' + place, ', second'+ place2);
}
fullName.call(name1, 'delhi', 'chandigarh');
fullName.apply(name1, ['delhi', 'mohali']);

const bindFullName = fullName.bind(name1, 'delhi', 'new Delhi bind');
console.log(bindFullName());


// polyfill mybind

Function.prototype.myBind = function (...args) {
    let context = this,
    params = args.slice(1);
    return function () {
        context.apply(args[0], params);
    }
}
const polyfillBind = fullName.myBind(name1, 'delhi', 'aslong');
console.log(polyfillBind('uttrakhand'));



// Throttling Nishant
export function throttleFn(fn, delay) {
    let flag = true;
    return function (...args) {
        const context = this;
        if (flag) {
            fn.apply(context, ...args);
            flag = false;
        }
        setTimeout(() => {
            flag = true;
        }, delay);
    };
}

export function debounce(fn, delay) {
    let timeout = null;
    return function () {
        const context = this;
        const args = arguments;
        const innerFn = () => {
            timeout = null;
            fn.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(innerFn, delay);
    };
}

// new way of writing

<input onkeyup="dbFn" type="text" />

function debounce(fn, delay) {
    let timer;
    return function() {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(context, args), delay);
    }
}
let countTimer = 0;

const dbFn = debounce(() => console.log('useful', ++countTimer), 300);