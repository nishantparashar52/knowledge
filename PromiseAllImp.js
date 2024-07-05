function PromiseAll(iterator) {
    return new Promise((res, rej) => {
        let iterate = new Array(iterator.length);
        let failed = iterate.length;

        if(failed === 0) {
            res(iterate);
        }
        iterator.forEach(async (item, index) => {
            try {
               let result = await item;
               iterate[index] = result;
               failed -= 1;
               if(failed === 0) res(iterate);
            } catch(e) {
                rej(e);
            }
        })
    })
}

let P1 = Promise.resolve('10');
let P2 = new Promise(res => setTimeout(() => res('v'), 1000));
let P3 = Promise.resolve('nishant');
// let P3 = Promise.reject(new Error('not found'));
PromiseAll([P1, P2, P3]).then(val => console.log(val));