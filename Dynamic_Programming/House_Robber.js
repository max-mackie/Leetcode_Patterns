/**
 * @param {number[]} nums
 * @return {number}
 */
//optimising my solution
var rob = function(nums){
    if(nums.length === 1) return nums[0]
    let p1 = nums[0];
    let p2 = Math.max(nums[1], p1)

    let max = 0
    for(let i = 2; i < nums.length; i++){
        max = Math.max(p1+nums[i], p2)
        p1 = p2
        p2 = max
    }
    return p2
};


// //attempt 2 after getting a little bit of inspo
// var rob = function(nums){
//     if(nums.length === 1) return nums[0]
//     if(nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1]
//     nums[2] = nums[2] + nums[0];
//     for(let i = 3; i < nums.length; i++){
//         nums[i] += nums[i-2] > nums[i-3] ? nums[i-2] : nums[i-3]
//     }
//     return Math.max(...nums)
// };

// //attempt 1 
// var rob = function(nums, memo={}) {
//     let key = nums.join(',')
//     if(key in memo)
//         return memo[key]
//     if(nums.length === 1)
//         return nums[0]
//     if(nums.length === 0)
//         return 0
//     let yes = nums[0] + rob(nums.slice(2, nums.length), memo)
//     let no = rob(nums.slice(1, nums.length), memo)
//     memo[key] = yes >= no ? yes : no
//     return memo[key]
// };
