/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right, memo = {}) {
    this.left = left
    this.right = right
    if(right === left){
        return this.nums[left]
    }
    if(right < left){
        return 0
    }
    if(right in memo) 
        return memo[right]
    memo[right] = this.sumRange(left, right-1, memo) + this.nums[right]
    return memo[right]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
