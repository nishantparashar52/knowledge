function zigzag(root) {
    let results = [];
        let traverse = (root, level) => {
            if(!root) return;
            if(results[level]) results[level].push(root.value);
            else results[level] = root.value;
            traverse(root.left, level + 1);
            traverse(root.right, level + 1);
        }
        results(root, 0);
    return results;
}
zigzag([3,9,null,null,15,7])


class Btree {
    constructor(data = '', left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

var bst = new Btree();
bst.add('20');
bst.add('17');
bst.add('23');
bst.add('11');
bst.add('22');
bst.add('29');
bst.add('4');
bst.add('26');
bst.add('31');