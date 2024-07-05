function PromiseAll(iterator) {
    return new Promise((res, rej) => {
        let iterate = [...iterator];
        let failed = iterate.length;

        if(failed === 0) {
            res(iterate);
        }
        iterate.forEach(async (item, index) => {
            try {
               let result = await item;
               iterate[index] = result;
               failed -= 1;
               if(failed === 0) res(iterate);
            } catch(e) {
                iterate[index] = e;
            }
        })
    })
}

let P1 = Promise.resolve('10');
let P2 = new Promise(res => setTimeout((v) => res(v), 1000));
let P3 = Promise.reject(new Error('not found'));