function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(args), delay);
    }
}
function getName(name) {console.log(name)};
window.onresize = debounce(getName, 1000);


function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(func.bind(context, args), wait);
    }
}
let handleInput = function (query, dispatch) {
    dispatch(fetchData(query));
};
handleInput = debounce(handleInput, 200);

function f(input) {
    return input.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? f(curr): curr), []);
}
console.log(f([[1, 2], [[3, 4]], 5, [6], 7]));