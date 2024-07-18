async function executePromisesInOrder(promises) {
    const results = []
    for(let promise of promises) {
        results.push(await promise())
    }
    return results
}

function executePromisesInOrder(promises) {
let Resolve = Promise.resolve(), results = [];

promises.forEach((promise) => {
    Resolve = Resolve.then(promise).then(val => {
        results.push(val)
        if(results.length === promises.length) {
            return results;
        }
    })
})
return Resolve;
}


class SequentialPromise {
    constructor() {
        this.tasks = []
        this.results = []
    }
    add(task) {
        this.tasks.push(task)
        return this
    }
    execute() {
        return this.tasks.reduce((promise, currentTask) => promise.then(currentTask).then(result => {
            this.results.push(result)
            console.log(result, 'result')
            return this.results
        }), Promise.resolve())
    }
    async executewithAsyncAll() {
        const result = await Promise.all(this.tasks)
        return result.map(r => this.results.push(r))
    }
    executeAll() {
        return Promise.all(this.tasks).then(resolvedPromises => resolvedPromises.map(r => this.results.push(r)))
    }
}

const SP = new SequentialPromise()
    .add(() => new Promise(resolve => setTimeout(() => resolve(1), 1000)))
    .add(() => new Promise(resolve => setTimeout(() => resolve(2), 1000)))
    .add(() => new Promise(resolve => setTimeout(() => resolve(3), 1000)))
    .add(() => new Promise(resolve => setTimeout(() => resolve(4), 1000)))
    .add(() => new Promise(resolve => setTimeout(() => resolve(5), 1000)))
    // .execute().then(console.log)
    .executeAll().then(console.log)