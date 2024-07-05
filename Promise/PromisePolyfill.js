class CustomPromise {
    constructor(iterator) {
        this.thenFn;
        this.isResolved = false;
        this.resolvedVal = '';
        

        const resolve = (val) => {
            this.isResolved = true;
            this.resolvedVal = val;
            if(typeof this.thenFn === 'function') this.thenFn(this.resolvedVal);
        }

        iterator(resolve);

    }
    then = (fn) => {
        this.thenFn = fn;
        if(this.isResolved) {
            this.thenFn(this.resolvedVal);
        }
        return this;
    }
}
let A = wait => new CustomPromise(resolve => setTimeout(() => resolve(2), wait))
A(2000).then(val => val * 2).then(a => console.log(a));
new CustomPromise(resolve => resolve(10)).then(val => console.log(val))
// new CustomPromise(resolve => setTimeout(() => resolve(100), 10).then(val => console.log(val))

