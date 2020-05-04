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

class Node {
    constructor(data) {
        this.data = data;
        this.left = '';
        this.right = '';
    }
}

class BinaryTree {
    constructor() {
        this.root = '';
    }
    add(data) {
        if(!this.root) {
            this.root = new Node(data);
            return this.root;
        }
        const insertNode = node => {
            const Queue = [];
            Queue.push(node.data);
            const result = [];
            if(!node.left) {
                node.left = new Node(data);
                Queue.push(data);
                return node;
            }
            else if(!node.right) {
                node.right = new Node(data);
                this.Queue.push(data);
                return node.right;
            } else {
                const childInserted = Queue.unshift();
                insertNode(childInserted.data);
            }
        }
        insertNode(this.root);
    }
}
