function executePromisesInOrder(promises) {
    const arr = [], Resolve = Promise.resolve();

    promises.forEach((promise) => {
        Resolve = Resolve.then(promise).then(val => {
            arr.push(val)
            if(arr.length === promises.length) {
                return arr;
            }
        });
    })
    return Resolve;
}
let promise1 = () => new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
let promise2 = () => new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 500));
let promise3 = () => new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 2000));

let promises = [promise1, promise2, promise3];

executePromisesInOrder(promises).then(console.log);