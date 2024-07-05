class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}

class BTree {
    constructor(val) {
        this.children = [];
        this.value = val;
    }
}

export {Node, BTree};
