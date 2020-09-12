class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(x) {
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(x);
        while(this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }
    dequeue() {
        const top = this.stack1[0];
        this.stack1.splice(0,1);
        return top;
    }
}

let Q = new Queue();
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.dequeue();