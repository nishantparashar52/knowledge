
class Node {
    constructor(id) {
        this.id = id;
        this.children = [];
    }
}

class BT {
    constructor() {
        this.id = null;
    }
    add(id) {
        if(!this.id) {
            this.id = new Node(this.id);
            this.children = this.children.push(data);
            return;
        }
        if(this.id === id) {
            this.children.push(data);
        }
        const searchTree = id => {
            if(data < node.data) {
                if(node.left === null) {
                    node.left = new Node(data);
                    return;
                }
                else searchTree(node.left);
            } else if (data > node.data) {
                if(node.right === null) {
                    node.right = new Node(data);
                    return;
                }
                else searchTree(node.right);
            }
        }
        return searchTree(id);
    }
    // findMin() {
    //     let current = this.root;
    //     while(current.left !== '') {
    //         current = current.left;
    //     }
    //     return current.data;
    // }
    // findMax() {
    //     let current = this.root;
    //     while(current.right !== '') {
    //         current = current.right;
    //     }
    //     return current;
    // }
    // isPresent(value) {
    //     let current = this.root;
    //     while(current) {
    //         if(current.data === value) return true;
    //         if(value > current.data) {
    //             current = current.right;
    //         } else current = current.left;
    //     }
    //     return false;
    // }
    // DfsInorder() {
    //     // 15,3,36,2,12,28,39
    //     let result = [];
    //     const traverse = node => {
    //         if(node.left) traverse(node.left);
    //         result.push(node.data);
    //         if(node.right) traverse(node.right);
    //     }
    //     traverse(this.root);
    //     return result;
    // }
    // DfsPreorder() {
    //     // 15,3,36,2,12,28,39
    //     let result = [];
    //     const traverse = node => {
    //         result.push(node.data);
    //         if(node.left) traverse(node.left);
    //         if(node.right) traverse(node.right);
    //     }
    //     traverse(this.root);
    //     return result;
    // }
    // DfsPostorder() {
    //     // 15,3,36,2,12,28,39
    //     let result = [];
    //     const traverse = node => {
    //         if(node.left) traverse(node.left);
    //         if(node.right) traverse(node.right);
    //         result.push(node.data);
    //     }
    //     traverse(this.root);
    //     return result;
    // }
    // Bfs() {
    //     let result = [];
    //     let queue = [];
    //     queue.push(this.root);
    //     while(queue.length) {
    //         let currentNode = queue.shift();
    //         result.push(currentNode.data); 
    //         if(currentNode.left) queue.push(currentNode.left);
    //         if (currentNode.right) queue.push(currentNode.right);
    //     }
    //     return result;
    // }   
}

var bst = new BST();
bst.add('20');
bst.add('17');
bst.add('23');
bst.add('11');
bst.add('22');
bst.add('29');
bst.add('4');
bst.add('26');
bst.add('31');
bst.Bfs();

// 20,17,23,11,22,29,4,26,31