function looper() {
    [1,2,3].forEach(item => {
        doSome(item).then(console.log)
    })
}

function doSome(val) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`connecting with ${val}`), 1000 * (i % 3));
    })
}


function executeSequentially(promises) {
    let result = Promise.resolve();
    promises.forEach(item => {
        result = result.then(item);
    })
    return result;
}

function PSetTimeout(val, delay) {
    return new Promise((resolve) => setTimeout(() => resolve(val), delay));
}

executeSequentially([Promise.resolve(10), PSetTimeout('1000', 1000), PSetTimeout('2000', 2000)])