function PromiseCreator(val, type, delay) {
    return new Promise(resolve => setTimeout(() => resolve(console.log(`${val} ${type}`)), delay))
}



const promises = [
    PromiseCreator(1, 'parallel', 1000),
    PromiseCreator(2, 'parallel', 1000),
    PromiseCreator(3, 'parallel', 1000),
    PromiseCreator(4, 'parallel', 1000),
    PromiseCreator(5, 'parallel', 1000),
    PromiseCreator(6, 'parallel', 1000),
];

const promisesParallel = [
    () => PromiseCreator(1, 'sequential', 1000),
    () => PromiseCreator(2, 'sequential', 1000),
    () => PromiseCreator(3, 'sequential', 1000),
    () => PromiseCreator(4, 'sequential', 1000),
    () => PromiseCreator(5, 'sequential', 1000),
    () => PromiseCreator(6, 'sequential', 1000),
];

function executeSequentially(promises) {
    let result = Promise.resolve();
    promises.forEach(function (promise) {
        result = result.then(promise);
    })
    return result;
}

// executeSequentially(promises)
// executeSequentially(promisesParallel)

let myArray = [1, 2, 3, 4, 5, 6]

myArray.reduce((acc, curr) => {
    acc.then(() => PromiseCreator(curr))
    return acc;
} , Promise.resolve());


const forEachSeries = async (array, action) => {
    for(const iterator of array) {
       await action(iterator, 'ForEach', 1000);
    }
} 

// store return values


const forEachSeriesStore = async (array, action) => {

    const result = [];
    for(const iterator of array) {
       result.push(await action(iterator, 'ForEachStore', 1000));
    }
    return result;
} 
// forEachSeries(myArray, PromiseCreator);
forEachSeriesStore(myArray, PromiseCreator);

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}
  
  delay(3000).then(() => alert('runs after 3 seconds'));