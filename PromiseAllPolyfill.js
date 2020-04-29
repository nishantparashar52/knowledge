// function customPromise(promises) {
//     promisePolyFill(promises).then(rs => console.log(rs),
//     rj => console.log('reject'))
// }

// function delay(ms, value) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms, value);
//     })
// }

// function promisePolyFill(promises) {
//     return new Promise((resolve, reject) => {
//         let count = promises.length;
//         // let result = [];
//         function checkPromiseDone() {
//             if(--count === 0) resolve('done');
//         }
//         promises.forEach((p,i) => p.then(val => val, reject)
//         .then(checkPromiseDone)
//         )
//     });
// }

// customPromise([delay(300, 'late'),
// delay(300, 'late1'),
// delay(400, 'lat2'),
// delay(1000, 'late3')
// ]);



function customPromise(promises) {
    All(promises).then(res => console.log(res), rej => console.log(rej));
}

var customPromise1 = customPromise([delay(300, 'late'),
delay(300, 'late1'),
delay(100, 'late2')]);

var customPromise2 = customPromise([delay(300, 'late'),
delay(300, 'late1'),
new Error('system'),
delay(1000, 'late2')]);

function delay(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms,value));
}


function All(promises) {
    return new Promise((resolve,reject) => {
        let count = promises.length;
        function nextPromise() {if(--count === 0) resolve('done');}
        promises.forEach((promise, index) => {
            promise
            .then(val => val, er => er)
            .then(nextPromise)
            .catch(er => er)
        });
    })
}


// function customPromise(promises) {
//     Race(promises).then(res => console.log(res), rej => console.log(rej));
// }

// var customPromise1 = customPromise([delay(300, 'late'),
// delay(300, 'late1'),
// delay(100, 'late2')]);

// var customPromise2 = customPromise([delay(300, 'late'),
// delay(300, 'late1'),
// new Error('system'),
// delay(1000, 'late2')]);

// function delay(ms, value) {
//     return new Promise(resolve => setTimeout(resolve, ms,value));
// }

// function Race(promises) {
//     return new Promise((resolve,reject) => {
//         function nextPromise() {if(--count === 0) resolve('done');}
//         promises.some((promise, index) => {
//             promise
//             .then(val => val, er => er)
//             .catch(er => er)
//         });
//     })
// }