
function throttle(fn, delay) {
    let lastCalled = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - lastCalled < delay) return;
        fnCalled = now;
        return fn(...args);
    }
}

document.getElementById('button').addEventListener('click', throttle(ev => console.log('clicked' +ev)), 10000);


function debounce(fn, delay) {
    let called = false;
    return function (...args) {
        let fnCalled = setTimeout(fn.bind(null, ...args), delay);
        if(fnCalled) clearTimeout(fnCalled);
    }
}