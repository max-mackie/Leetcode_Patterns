/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, sumTarget, i=0, memo = {}) {
    let key = `${sumTarget},${i}`
    if(key in memo)
        return memo[key]
    if(sumTarget === 0 && i === nums.length)
        return 1 
    if(i === nums.length)
        return 0
    memo[key] = findTargetSumWays(nums, sumTarget + nums[i], i+1, memo) + findTargetSumWays(nums, sumTarget - nums[i], i+1, memo)
    return memo[key]
};
