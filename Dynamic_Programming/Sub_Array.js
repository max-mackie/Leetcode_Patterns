/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] > 0)
            nums[i] += nums[i-1]
    }
    return Math.max(...nums)
};
