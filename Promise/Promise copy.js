// Promise


var Promise = new Promise((res, rej) => setTimeout(res('success'), 2000));


function Top() {
    return parent().then(val => {
    return child(val.id)
}).then(response => {
    return response.result.items;
});
}

let promise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('get', 'http://randomuser.me/api');
    req.onload = resolve;
    req.onerror = reject;
    req.send();
})

promise.then(function (data) {
    let d = data.target.response;
})

// then .then
const Promise = (new Promise(resolve)).then(handleFn1).then(handleFn2).then(handleFn3);

const PromiseA = new Promise((resolve, reject) => {
    resolve(777);
});
PromiseA.then(item => console.log('item'));



let taskA = message => new Promise((resolve, reject) => resolve(message + 'room cleaned'));
let taskB = message => new Promise((resolve, reject) => resolve(message + 'AC cleaned'));
let taskC = message => new Promise((resolve, reject) => resolve(message + 'chair cleaned'));


taskA()
.then(result => taskB(result)) // console.log(status) return taskB(staus);
.then(result => taskC(result)) // console.log(newStatus) return taskC(newStatus);
.then(result => console.log('finished'+ result));
Promise.all([taskA(), taskB(), taskC()]).then(val => console.log('all finished' + val));
Promise.race([taskA(), taskB(), taskC()]).then(val => console.log('first resolved' + val));



// Problems on stack overflow

function foo() {
    $.ajax({
        url: '...',
        success: function(response) {
            result = response;
            // return response; // <- I tried that one as well
        }
    });

    return result;
}

const ajax = url => new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){ resolve(this.responseText)};
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
});
ajax('').then(response => response).catch(() => console.log('error occured'));



let ajax = url => new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() { 
        resolve(this.responseText) 
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
});
ajax("https://teamtreehouse.com/jamesbarnett.json")
.then(response =>  renderData(JSON.parse(response))).catch(() => console.log('error occured'));


// promise chaining
var wait2 = time => new Promise(resolve => setTimeout(() => resolve(time)));

wait2(3000).then(() => new Promise(res => res('foo')))
.then(res => res)
.then(res => console.log(res))
.then(() => null)
.then(c => console.log(c))
.then(() => {throw new Error('foo');})
.then(d => console.log(d), c=> console.log(c))
.then(f => console.log(f))
.catch(e => console.log(`ee ${e}`));




/* Promise Chaining */
new Promise((resolve, reject) => {
    setTimeout(() => resolve, 1000);
}).then( result => {console.log(result); return result * 2;}).then(result => result * 2);

document.getElementById('item').addEventListener('click', ev => ev.preventDefault());