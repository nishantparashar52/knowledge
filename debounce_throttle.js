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