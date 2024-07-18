class Promise {
    constructor() {
        console.log('constr');
    }
    getUsers() {
        return fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(data => data.json());
    }
    getEmp() {
        return fetch('http://dummy.restapiexample.com/api/v1/employee/1')
        .then(data => data.json());
    }
    showUI(data) {
        console.log(data);
    }
}
const p1 = new Promise();
p1.getEmp();
p1.getUsers();
Promise.all(p1.getUsers(), p1.getEmp()).then(data => p1.showUI(...data));

function task(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time);
    });
}

let taskList = [task(1000), task(2000), task(300)];

function resolveAll(taskList) {
    let results = [];
    let processCompleted = 0;
    return new Promise((resolve, reject) => {
        taskList.map((promise, index) => {
            promise.then(val => {
                results[index] = val;
                processCompleted += 1;
                if (processCompleted === results.length) {
                    resolve(results);
                }
            }).catch(err => console.log(err));
        });
    })
}

resolveAll(promise).then(results => {
    console.log('results', results);
}).catch(e => {
    console.log('error');
});


function resolveAllC(promises) {
    let result = [];
    return new promise((resolve, reject) => {
        promises.map((promise, index) => {
            promise.then(val => {
                if(index !== promises.length) {
                    result.push(val);
                } else resolve(result);
            })
        })
    })
}