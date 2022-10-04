class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        if(!this.stack.length) {
            this.stack.push(val);
            this.minStack.push(val);
        }
        else {
            this.stack.push(val);
            if(this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val)));
        }
    }
    pop() {
        if(!this.stack.length) return '';
        this.minStack.pop();
        return this.stack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

export default MinStack;
