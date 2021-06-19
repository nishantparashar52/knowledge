
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
