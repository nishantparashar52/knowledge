class Queue {
    constructor() {
        this.list = [];
    }
    push(elem) {
        this.list.push(elem);
    }
    pop() {
        this.list.splice(1);
    }
    peak() {
        return this.list[0];
    }
}