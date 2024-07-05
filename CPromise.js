class CPromise {
    constructor(executor) {
        this.executor = executor;
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.thenCallback = undefined;
        this.catchCallback = undefined;
        this.finallyCallback = undefined;
        const resolve = (value) => {
            this.status = 'resolved';
            this.value = value;
            if(this.thenCallback) this.thenCallback(value);
        }
        const reject = (value) => {
            this.status = 'rejected';
            this.reason = value;
            if(this.catchCallback) this.catchCallback(value);
        }
        this.executor(resolve, reject)
    }
        
    then(val) {
        this.thenCallback = val;
        return this;
    }
    
    catch(err) {
        this.catchCallback = err;
        return this;
    
    }
    
    finally() {
    
    }
}



const promise = new CPromise((resolve, reject) => {
    resolve('Hello World 1')
    setTimeout(() => {
        reject('Hello World');
    }, 1000);
})
promise.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})