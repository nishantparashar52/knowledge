// merge two sorted linked list

function SortMerge(A, B) {
    if(A === null) return B;
    if(B === null) return A;
    if(A.data < B.data) {
        A.next = SortMerge(A.next, B);
        return A;
    } else {
        B.next = SortMerge(A, B.next);
        return B;
    }
}


function lowestCommonAncestor(root, n1, n2) {
    if(root === null) return null;
    if(root === n1 || root === n2) return root;
    let left = lowestCommonAncestor(root.left, n1 , n2);
    let right = lowestCommonAncestor(root.right, n1 , n2);
    if(left !== null && right !== null) return root;
    if(left === null && right === null) return null;
    return left !== null ? left : right;
}


function BFSOrderTriversal(root) {
    const res = [];
    if(!root) return res;
    let queue = [];
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        let level = [];
        while(size--) {
            let curr = queue.shift();
            level.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    res.push(level.concat());
    }
    return res;
}

function DepthOrderTriversal(root) {
    return helper([], root, 0);
    function helper(res, root, level) {
        if(root) {
            if(!res[level]) res[level] = [];
            res[level].push(root.val);
            helper(res, root.left, level + 1);
            helper(res, root.right, level + 1);
        }
        return res; 
    }
}


let arr = [11, 13, 21, 3];


// max = 0, nextMax = 0
// max = 11, nextMax = 13
// n * n -1
// 13, 21, -1, -1
function nextGreater(arr) {
    let next, nextArr = [];
    for(let i = 0, len = arr.length; i< len;i++) {
        next = -1;
        for(let j = i + 1, len = arr.length; j < len; j++) {
            if(arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        nextArr.push(next);
    }
    return nextArr;
}

nextGreater([11,13,21,3])

function nextGreaterStack(arr) {
    let stack = [];
    for(let i = 0, len = arr.length; i< len;i++) {
        if(stack.length === 0) {
            stack.push(arr[i]);
            continue;
        }
        while(stack.length !== 0 && stack[stack.length - 1] < arr[i]) {
            console.log(stack[stack.length - 1] + 'value is ' + arr[i]);
            stack.pop();
        }
        stack.push(arr[i]);
    }
    while(stack.length !== 0) {
        console.log(s[s.length - 1] + '' + '-1');
        s.pop();
    }
}
nextGreaterStack([11,13,21,3]);

function findMin(nums) {
     let l = 0, r = nums.length -1;
    function getMin(nums, l, r) {
    if(l + 1 >= r) return Math.min(nums[l], nums[r]);
    else if(nums[l] < nums[r]) return nums[l];
    let mid = l + Math.floor((r-l)/2);
    return Math.min(getMin(nums, l, mid - 1), getMin(nums, mid, r)); 
    }
    return getMin(nums, l, r);
}
findMin([2,2,0,1]);