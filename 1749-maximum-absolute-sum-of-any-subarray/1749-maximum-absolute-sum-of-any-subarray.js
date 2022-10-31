/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    
    let currSum = 0;
    let maxSum = 0;
    let minSum = 0;
    
    for (let num of nums) {
        currSum += num;
        maxSum = Math.max(maxSum, currSum);
        minSum = Math.min(minSum, currSum);
    }
    
    return maxSum - minSum;
};

// var maxAbsoluteSum = function(nums) {
    
//     if (nums.length === 1) return Math.abs(nums[0]);
    
//     let currSum = 0;
//     let maxSum = 0;
//     let minSum = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         currSum = currSum + nums[i];
//         if (maxSum < currSum) {
//             maxSum = currSum
//         }
//         if (currSum < 0) {
//             currSum = 0
//         }

//     }
    
//     currSum = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         currSum = currSum + nums[i];
//         if (minSum > currSum) {
//             minSum = currSum
//         }
//         if (currSum > 0) {
//             currSum = 0
//         }
//     }
    
//     return Math.max(maxSum, Math.abs(minSum))

// };