function debounce(fn, wait) {
    let timeout = null;
    return function() {
        let args = arguments;
        let context = this;
        let later = () => timeout = null; fn.apply(context, args);
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
}


const input = document.querySelector('input');
input.addEventListener('keyup', debounce( () => {
console.log('pressed');
}, 3));

function debounce(fn, wait) {
    let timeout;
    return function(...args) {
        let context = this;
        let later = () => {
          timeout = null;
          fn.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
}

function debounce(fn, wait, counter) {
    let timeout;
    let count = 0;
    return function(...args) {
        let context = this;
        let later = () => {
          timeout = null;
          fn.apply(context, args);
        }
        if (count === counter) {
            count = 0;
            clearTimeout(timeout);
            later();
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
}


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
