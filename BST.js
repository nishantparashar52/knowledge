class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (!node) {
            this.root = new Node(data);
            return;
        }
        const insertNode = node => {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else insertNode(node.left);
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                } else insertNode(node.right);
            }
        }
        return insertNode(node);
    }
}

var bst = new Tree();
bst.add('20');
bst.add('17');
bst.add('23');
bst.add('11');
bst.add('22');
bst.add('29');
bst.add('4');
bst.add('26');
bst.add('31');