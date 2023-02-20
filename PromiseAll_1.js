function Result(promises, finalResult) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(data => {
                result[index] = data;
            })
            if(result.length === promise.length) {
                const mergedResult = result.reduce((acc, curr) => acc +=curr, '');
                resolve(mergedResult);
            }
        })
    })   
}

function PromiseAllCustom(promises, finalResult) {
    let result = [];
    return new Promise((resolve, reject) => {
        for(let i =0, len = promises.length; i < len; i++) {
            let promise = promises[i];
            promise.then(data => {
                result.push(data);
            }).catch(e => new Error('error'))
        }
        resolve(result);
    })
}