// promise polyfill



// function MyPromise(init) {
//     let nextSuccessCallback;
//     let nextResolve;

//     init(function(message) {
//         setTimeout(() => {
//             if(nextSuccessCallback) {
//                 var result = nextSuccessCallback(message);
//                 if(result && result.then) return result.then(nextResolve);
//                 nextResolve && nextResolve(result);
//             }
//         })
//     });
//     return {
//         then: function(successCallback) {
//             nextSuccessCallback = successCallback;
//             return new CustomPromise(function(resolve) {
//                 nextResolve = resolve;
//             }) 
//         }
//     }
// }
// this based implementation
function MyPromise1(init) {
    let nextSuccessCallback;
    let nextResolve;

    init(function(message) {
        setTimeout(() => {
            if(nextSuccessCallback) {
                var result = nextSuccessCallback(message);
                if(result && result.then) return result.then(nextResolve);
                nextResolve && nextResolve(result);
            }
        })
    });
    this.then = function(successCallback) {
        nextSuccessCallback = successCallback;
        return new CustomPromise(function(resolve) {
            nextResolve = resolve;
        });
    }
}


new MyPromise1(function(resolve) {
    resolve('123');
}).then(data => {
    console.log(data);
    return new Promise(resolve => {
        resolve('another promise')
    });
}).then(data => console.log(data))

class MyPromise3 {
    constructor(init) {
        init(function(message){
            setTimeout(() => {
                if(nextSuccessCallback) {
                    var result = nextSuccessCallback(message);
                    if(result && result.then) return result.then(nextResolve);
                    nextResolve && nextResolve(result);
                }
            })
        });
        this.nextsuccessCallback;
        this.nextResolve;
    }
    then(successCallback) {
        this.nextSuccessCallback = successCallback;
        return new Promise(function (resolve) {
            this.nextResolve = resolve;
        })
    }   
}

const factoryObj = {
    talk() {
        return `my name is ${this.name}`
    }
}

function factoryFn(name) {
    return Object.create(factoryObj, {
        name: {value: name}
    })
}