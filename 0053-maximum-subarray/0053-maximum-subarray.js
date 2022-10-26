/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let memo = { 0: nums[0] };
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        memo[i] = Math.max(memo[i-1] + nums[i], nums[i]);
        max = Math.max(max, memo[i]);
    }
    
    return max;
};



// var maxSubArray = function(nums) {
//     // Max call stack exceeded
//     if (nums.length == 1) return nums[0];
//     let sum = -Infinity;
    
//     //iterate through each element and sum up values of contiguous array
//     for (let i = 0; i < nums.length; i++) {
//         let count = nums[i];
//         sum = Math.max(sum, count);
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j]) {
//               count += nums[j];
//               sum = Math.max(sum, count);
//             } 
//         }
//     }
    
//     return sum;
// };
