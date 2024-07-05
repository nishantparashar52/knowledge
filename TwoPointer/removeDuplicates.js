var removeDuplicates = function(nums) {
   let k = 1;
    for(let i = 1, len = nums.length; i <len;i++) {
        debugger;
        if(nums[i] !== nums[i-1]) nums[k++] = nums[i];
    }
    return k;
};

removeDuplicates([1,1,2,2,2,3,3]);