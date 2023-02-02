/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // Use a pointer currSum to track each sum at each index
    let result = [nums[0]];
    let currSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currSum += nums[i];
        result[i] = currSum;
    }
    
    return result;
};