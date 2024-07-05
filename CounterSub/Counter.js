class Counter {
    constructor() {
        this.count = 0;
        this.observers = [];
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.count += 1;
        this.notify(this.count);
    }

    decrement() {
        this.count -= 1;
        this.notify(this.count);
    }
    notify(data) {
        this.observers.forEach(item => {
            item.call(null, data);
        })

    }
    subscribe(observer) {
        this.observers.push(observer);
    }
}
var C = new Counter();
C.subscribe(function() {
    document.getElementById('val').innerHTML = C.count;
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
})
function getId(id) {
    return document.getElementById(id);
}
getId('inc').addEventListener('click', C.increment);
getId('dec').addEventListener('click', C.decrement);