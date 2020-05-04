class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if(!this.items) {
            console.log('Queue is empty');
        } else {
            return this.items.shift();
        }
    }
    front() {
        if(!this.items) {
            console.log('Queue is empty');
        } else {
            return this.items[0];
        } 
    }
    isEmpty() {
        if(!this.items) {
            return true;
        }
        return false;
    }
    printQueue() {
        let str = '';
        for(let i = 0, len= this.items.length; i < len; i++) {
            str += this.items[i];
        }
        return str;
    }
}
export default Queue;
// var queue = new Queue(); 

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);
// queue.dequeue();
// queue.front();
// queue.printQueue();