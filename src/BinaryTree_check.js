class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (!this.items) {
            console.log('Queue is empty');
        } else {
            return this.items.shift();
        }
    }
    front() {
        if (!this.items) {
            console.log('Queue is empty');
        } else {
            return this.items[0];
        }
    }
    isEmpty() {
        if (!this.items) {
            return true;
        }
        return false;
    }
    printQueue() {
        let str = '';
        for (let i = 0, len = this.items.length; i < len; i++) {
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
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this.root;
        }
        const Queue = [];
        const insertNode = node => {
            if (!node.left) {
                node.left = newNode;
                return node;
            } else if (!node.right) {
                node.right = newNode;
                return node;
            } else {
                if(node.left) Queue.push(node.left);
                if(node.right) Queue.push(node.right);
                insertNode(Queue.shift());
            }
        }
        insertNode(this.root);
    }
    bfs() {
        const Queue = [];
        const result = [];
        Queue.push(this.root);
        while(Queue.length) {
            const currentNode = Queue.shift();
            result.push(currentNode.data);
            if(currentNode.left) Queue.push(currentNode.left);
            if(currentNode.right) Queue.push(currentNode.right);
        }
        return result;
    }
    dfsInorder() {
        let result = [];
        const traverse = node => {
            if(node.left) traverse(node.left);
            result.push(node.data);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
}

var a = new BinaryTree();
a.add(10);
a.add(11);
a.add(20);
a.add(5);
a.add(4);
a.add(12);



class Tree {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

class Section {
    constructor() {
        this.root = '';
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this.root;
        }
        const Queue = [];
        const insertNode = node => {
            if (!node.left) {
                node.left = newNode;
                return node;
            } else if (!node.right) {
                node.right = newNode;
                return node;
            } else {
                if(node.left) Queue.push(node.left);
                if(node.right) Queue.push(node.right);
                insertNode(Queue.shift());
            }
        }
        insertNode(this.root);
    }
    bfs() {
        const Queue = [];
        const result = [];
        Queue.push(this.root);
        while(Queue.length) {
            const currentNode = Queue.shift();
            result.push(currentNode.data);
            if(currentNode.left) Queue.push(currentNode.left);
            if(currentNode.right) Queue.push(currentNode.right);
        }
        return result;
    }
    dfsInorder() {
        let result = [];
        const traverse = node => {
            if(node.left) traverse(node.left);
            result.push(node.data);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
}
