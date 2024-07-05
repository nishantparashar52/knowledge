class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}


function RightView(node) {
    let maxLevel = 0, level = 1;
    function dfs(node, level, slate) {
        if(node === null) return slate.slice(''); 
        if(maxLevel < level) {
            slate.push(node.data);
            maxLevel = level;
        }
        dfs(node.right, level + 1, slate);
        dfs(node.left, level + 1, slate);
    }
    dfs(node, level, slate = []);
    return slate;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
console.log(RightView(root));