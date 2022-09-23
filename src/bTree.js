class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BTree{
    constructor() {
        this.root = '';
    }
    insert(data) {
        const newNode = new Node(data);
        if(!this.root) {
            this.root = newNode;
            return this.root;
        }
        const Queue = [];
        const insertNode = (node) => {
            if(!node.left) {
                node.left = newNode;
                return node;
            } else if(!node.right) {
                node.right = newNode;
                return node;
            } else {
                if(node.left) Queue.push(node.left);
                else if(node.right) Queue.push(node.right)
                insertNode(Queue.shift());
            }
        }
        insertNode(this.root);
    }
}

var bT = new BTree(10);
bT.insert(12);
bT.insert(15);
bT.insert(10);