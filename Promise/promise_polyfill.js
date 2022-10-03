// Here's my code I believe this is easy to understand

//**Function which will use all the promises**
function customPromise(promises) {
    All(promises).then(res => console.log(res), rej => console.log(rej));
}
// calling that function
var customPromise1 = customPromise([delay(300, 'late'),
    delay(300, 'late1'),
    delay(100, 'late2')
]);
// calling that function with diff arguments
var customPromise2 = customPromise([delay(300, 'late'),
    delay(300, 'late1'),
    new Error('system'),
    delay(1000, 'late2')
]);
// delay promise
function delay(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms, value));
}

// this will take all the promise
function All(promises) {
    return new Promise((resolve, reject) => { // this line is used to return new promise
        let count = promises.length;

        function nextPromise() {
            if (--count === 0) resolve('done');
        } // call resolve when all the promises are done
        promises.forEach((promise, index) => {
            promise
                .then(val => val, er => er)
                .then(nextPromise)
                .catch(er => er)
        });
    })
}