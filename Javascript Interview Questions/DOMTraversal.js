function DOMTraversal(root) {
    if(!root) return;
    let flatten = [];
    let queue = [root];
    while(queue.length) {
        const node = queue.shift();
        flatten.push(node);
        for(let k of node.children) {
            queue.push(k);
        }
    }
    return flatten;
}