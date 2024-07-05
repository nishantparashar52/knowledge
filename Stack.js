class Stack {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
    pop() {
        if(this.list.length ===0) return 'underflow';
        return this.list.pop();
    }
    peek() {
        return this.list[this.list.length - 1];
    }
    isEmpty() {
        return this.list.length === 0 || false;
    }
}

export default Stack;