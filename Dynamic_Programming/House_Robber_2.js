/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <= 3)
        return Math.max(...nums)
    const maxLoot = (nums, start, finish) => {
        let prev = 0
        let prevprev = 0
        let maxPick = null
        for(let i=start; i<finish; i++){
            maxPick = Math.max(nums[i] + prevprev, prev)
            prevprev = prev
            prev = maxPick
        }
        return maxPick
    }

    findMax = (nums) => {
        return Math.max(maxLoot(nums, 0, nums.length-1), maxLoot(nums, 1, nums.length))
    }
    return findMax(nums)
};
