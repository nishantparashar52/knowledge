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
class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}

function BFS(root) {
    let queue = [], res = [];
    queue.push(root);
    while(queue.length) {
        let curr = queue.shift();
        res.push(curr.value);
        if(curr.left)queue.push(curr.left);
        if(curr.right)queue.push(curr.right);
    }
    return res;
}
let n = 1;
let root = new Node(n++);
root.left = new Node(n++);
root.right = new Node(n++);
root.left.left = new Node(n++);
root.left.right = new Node(n++);
root.right.left = new Node(n++);
root.right.right = new Node(n++);
BFS(root);
