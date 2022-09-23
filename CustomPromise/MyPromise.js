class MyPromise {
    resolvedData;
    rejectedData;
    isResolved = false;
    isRejected = false;
    resolveChain = [];
    rejectChain = [];

    static resolve(val) {
        return new MyPromise(resolve => {
            resolve(val);
        })
    }

    static reject(val) {
        return new MyPromise((_resolve, reject) => {
            reject(val);
        })
    }


    static all(promises) {
        let resolvingState = [];
        let results = [];

        // return new MyPromise((resolve, reject) => {
        //     for(let i =0; i< promises.length; i++) {
        //         this[i].then(data => {
        //             resolvingState.push(this[i]);
        //             results[i] = data;
        //             if(resolvingState.length === promises.length) resolve(results);
        //             }).catch(err => reject(err));
        //         }
        //     })
            promises.forEach((promise, index) => {
                promise
                .then(data => {
                    resolvingState.push(data);
                    results[index] = data;

            if(resolvingState.length === promises.length) resolve(results);
                }).catch(err => reject(err));
            })
        // })
    }

    constructor(executer) {
        const resolve = (data) => {
            this.resolvedData = data;
            this.isResolved = true;
            if(this.resolveChain.length) {
                this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
            }
        }
        const reject = data => {
            this.rejectedData = data;
            this.isRejected = true;
            if(this.rejectChain.length) {
                this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
            }
        }
        executer(resolve, reject);
    }

    then = (fn) => {
        this.resolveChain.push(fn);
        if(this.isResolved) {
            this.resolveChain.reduce((acc, func) => func(acc), this.resolvedData);
        }
        return this;
    }

    catch = (fn) => {
        this.rejectChain.push(fn);
        if(this.isRejected) {
            this.rejectChain.reduce((acc, func) => func(acc), this.rejectedData);
        }
        return this;
    }

    finally = (fn) => {
        this.resolveChain.push(fn);
        this.rejectChain.push(fn);
        if(this.isResolved) {
            this.resolveChain.reduce((acc, func) => func(acc), this.resolvedData);
        }
        if(this.isRejected) {
            this.rejectChain.reduce((acc, func) => func(acc), this.rejectedData);
        }
    }
}

export default MyPromise;