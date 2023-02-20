import { BTree } from "./Node.js";

var CheckValidBtree = function(...arr) {
    const finalArr = arr.map(item => item.match(/\d+/g));
    const degree = {};
    for(let [_, parent] of finalArr) {
        if((++degree[parent] || (degree[parent] = 1)) > 2) return 'node with 3 children';
        console.log(`here ${JSON.stringify(degree)}`);
    }
    const nodes = {};
    let current = 0;
    let currentRoot = 0;
    for(let [node,nodeParent] of finalArr) {
        current++;
        while(node && !nodes[node]) {
            nodes[node] = current;
            node = nodeParent;
        }
    }
}

export default CheckValidBtree;
