import DFS from '../DFS.js';
import Node from '../Node.js';
import {ValidParenthesis, ValidParenthesisUsingCount} from '../ValidParenthesis.js';
import {Permutation, PermutationDuplicate} from '../Permutation.js';
import {CombinationSum, CombinationSum2, CombinationSum3} from '../combinationSum.js';

import PalindromePartition from '../PalindromePartition.js';
import NQueen from '../NQueen.js';


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