// Promise


var Promise = new Promise((res, rej) => setTimeout(res('success'), 2000));


function Top() {
    return parent().then(val => {
    return child(val.id)
}).then(response => {
    return response.result.items;
});
}


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