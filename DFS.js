import Stack from './Stack.js';
import {Node} from './Node.js';

function DFSRec(root, res = '') {
    if(root === null) return res;
    res = res.concat(root.value);
    if(root.left) DFS(root.left, res);
    if(root.right) DFS(root.right, res);
}

function DFS(root) {
    let stack = new Stack(), current = root;
    stack.add(root);
    while(!current.isEmpty) {
        while(current.left !==null) {
            current = current.left;
            stack.add(current);
        }
        current = stack.pop();
        console.log(current.value);
        while(current.right !==null) {
            current = current.right;
            stack.add(current);
        }
    } 
}

export default DFS;
