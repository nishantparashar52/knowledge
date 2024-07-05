
/* Memoization */
const Memoization = () => {
    let cache = {};
    return val => {
        if(val in cache)  return `in cache ${cache[val]}`;
        let result = val + 20;
        cache[val] = result;
        return result;
    }
}

var add = Memoization();
add(5);

const Welcome = name => greeting = message => console.log(message + ' ' + name);

document.cookie = "username=John";


const memo = (function(){

    const cache = {};

    return function _cache(fn) {
        return function() {
            const key = JSON.stringify(arguments);
            if(cache[key]) {
                console.log('key exists');
                return cache[key];
            } else {
                cache[key] = fn.apply(this, arguments);
                return cache[key];
            }
        }
    }
})();


