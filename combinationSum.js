function CombinationSum(k, n) {
    const result = [], nums = [];
    for(let i = 1, len = 9; i<= len;i++) nums.push(i);

    const getSum = (nums, i, k, n, slate) => {
        //backtracking case
        if(n < 0) return;
        else if(k < 0) return;
        // base case
        if(slate.length === n) {
            if(k === 0) {
                result.push(slate.slice());
                console.log('result here');
            }
            return;
        }
        // dfs recursive case
        for(let j = i; j <nums.length; j++) {
            slate.push(nums[j]);
            getSum(nums, j+1, k - nums[j], n, slate);
            slate.pop();
        }

    }
    getSum(nums, 0, k, n, []);
    return result;
}

function CombinationSum2(nums, sum) {
    const result= [];
    nums.sort((a,b) => a - b);

    const dfs = (i, nums, sum, slate) => {
        //backtracking
        if(sum < 0) return;
        // base case
        if(sum === 0) {
            result.push(slate.slice());
            return;
        }
        // recursive case;
        for(let j = i; j<nums.length;j++) {
            if(i !== j && nums[j] === nums[j - 1]) continue;
            slate.push(nums[j]);
            dfs(j+1, nums, sum - nums[j], slate);
            slate.pop();
        }
    }

    dfs(0, nums, sum, []);
    return result;
}




function CombinationSum3(nums, sum) {

    const result = [];
    const dfs = (i, nums, sum, slate) => {
        if(sum < 0) return;
        else if(sum === 0) {
            result.push(slate.slice());
            return;
        }
        for(let j = i; j< nums.length; j++) {
            slate.push(nums[j]);
            dfs(j, nums, sum - nums[j], slate);
            slate.pop();
        }
    }
    dfs(0, nums, sum, []);
    return result;
}




function CombinationSumMax(nums) {
    const result = [];
    const dfs = (i, nums, sum, slate) => {
        if(sum < 0) return;
        else if(sum === 0) {
            result.push(slate.slice());
            return;
        }
        for(let j = i; j< nums.length; j++) {
            slate.push(nums[j]);
            dfs(j+1, nums, sum - nums[j], slate);
            slate.pop();
        }
    }
    const [num, sum] = findMax(nums);
    dfs(0, num, sum, []);
    return result;
}
function findMax(nums) {
    let max = 0;
    for(let i = 0, len = nums.length; i < len;i++) {
        if(nums[max] < nums[i]) max = i;
    }
    const maxNum = nums[max];
    nums.splice(max, 1);
    return [nums, maxNum];
}
export {CombinationSum, CombinationSum2, CombinationSum3, CombinationSumMax};