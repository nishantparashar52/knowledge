class CustomPromise {
    isResolved = false;
    resovedData;
    thenFn;
    constructor(iterator) {
        const resolve = (val) => {
            this.isResolved = true;
            this.resovedData = val;
            if(typeof this.thenFn === 'function') this.thenFn(this.resovedData);
        }
        iterator(resolve);
    }
    then(fn) {
        this.thenFn = fn;
        if(this.isResolved) this.thenFn(this.resovedData);
    }
}

new CustomPromise(resolve => resolve(10)).then(val => console.log(val));
new CustomPromise(resolve => setTimeout(() => resolve(10), 1000)).then(val => console.log(val));

new CustomPromise(resolve => resolve(10)).then(val => val + 10).then(val => console.log(val));

// then chaining

class CustomPromise {
    isResolved = false;
    resovedData;
    resolveChaining = [];
    constructor(iterator) {
        const resolve = (val) => {
            this.isResolved = true;
            this.resovedData = val;
            if(this.resolveChaining.length) {
                this.resolveChaining.reduce((acc, fn) => fn(acc),this.resovedData); 
            }
        }
        iterator(resolve);
    }
    then(fn) {
        this.resolveChaining.push(fn);

        if(this.isResolved) {
            this.resolveChaining.reduce((acc, fn) => fn(acc),this.resovedData);
        }
        return this;
    }
}

// adding static methods


class CustomPromise {
    isResolved = false;
    resovedData;
    resolveChaining = [];

    static resolve(value) {
        return new Promise(resolve => resolve(value));
    }
    static reject(value) {
        return new Promise((resolve, reject) => reject(value));
    }
    static all(promises) {
        const fullfilled = [];
        const results = []
        return new CustomPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(data => {
                    fullfilled.push(data);
                    results[index] = data;
                    if(fullfilled.length === promises.length) resolve(reject);
                })
            })
        })
    }
    constructor(iterator) {
        const resolve = (val) => {
            this.isResolved = true;
            this.resovedData = val;
            if(this.resolveChaining.length) {
                this.resolveChaining.reduce((acc, fn) => fn(acc),this.resovedData); 
            }
        }
        iterator(resolve);
    }
    then(fn) {
        this.resolveChaining.push(fn);

        if(this.isResolved) {
            this.resolveChaining.reduce((acc, fn) => fn(acc),this.resovedData);
        }
        return this;
    }
}