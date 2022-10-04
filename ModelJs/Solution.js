import DFS from '../DFS.js';
import Node from '../Node.js';
import {ValidParenthesis, ValidParenthesisUsingCount} from '../ValidParenthesis.js';
import {Permutation, PermutationDuplicate} from '../Permutation.js';
import {CombinationSum, CombinationSum2, CombinationSum3} from '../combinationSum.js';

import PalindromePartition from '../PalindromePartition.js';
import NQueen from '../NQueen.js';
import LetterCombination from '../LetterCombination.js';
import OceanView from './../OceanView.js';
import LRUCache from '../LRUCache.js';
import MinStack from '../MinStack.js';
import SimplifyPath from '../SimplifyPath.js';



let n = 1;
let root = new Node(n++);
root.left = new Node(n++);
root.right = new Node(n++);
root.left.left = new Node(n++);
root.left.right = new Node(n++);
root.right.left = new Node(n++);
root.right.right = new Node(n++);
// console.log(DFS(root));

// console.log(ValidParenthesis(2));

// Permutation([1,2,3]);

// console.log(ValidParenthesisUsingCount(2));
// console.log(PermutationDuplicate([1,1,2]));

// console.log(CombinationSum(7,3));
// console.log(CombinationSum2([10,1,2,7,6,1,5],8));
// console.log(CombinationSum3([2,3,6,7],10));

// console.log(PalindromePartition('aab'));

console.log(NQueen(4));

console.log(LetterCombination('23'));
// OCeanView
console.log(OceanView([4,2,3,1]));
console.log(OceanView([2,2,2,2]));
console.log(OceanView([1,3,2,4]));
console.log(OceanView([4,3,2,1]));

let L = new LRUCache(3);
L.put(4, 2);
L.put(10, 20);
L.put(12, 30);
console.log(L.put(15, 25));
console.log(L.get(10));

let mStack = new MinStack();
mStack.push(-2);
mStack.push(0);
mStack.push(-3);
mStack.getMin();
mStack.pop();
mStack.top();


console.log(SimplifyPath("/home//foo/"));

