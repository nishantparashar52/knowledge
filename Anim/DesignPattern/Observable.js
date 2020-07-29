class Observable {
    constructor() {
       this.observer = [];
    }
    subscribe(item) {
        this.observer.push(item);
    }
    unsubscribe(item) {
        if(!this.observer) return 'empty';
        else {
            this.observer.filter(subscribe => subscribe !== item);
        }
    }
    notify(data) {
        this.observer.forEach(item => item(data));
    }
}

var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var p3 = document.querySelector('.p3');
var input = document.querySelector('.input');


const update1 = item => p1.textContent = item;
const update2 = item => p2.textContent = item;
const update3 = item => p3.textContent = item;


var observarble = new Observable();
observarble.subscribe(update1);
observarble.subscribe(update2);
observarble.subscribe(update3);

input.addEventListener('keyup', ev => observarble.notify(event.target.value));