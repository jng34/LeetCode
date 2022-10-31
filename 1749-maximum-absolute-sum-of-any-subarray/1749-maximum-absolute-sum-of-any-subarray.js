/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    
    if (nums.length === 1) return Math.abs(nums[0]);
    
    let currSum = 0;
    let maxSum = 0;
    let minSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currSum = currSum + nums[i];
        // console.log("currSum: " + currSum)
        if (maxSum < currSum) {
            maxSum = currSum
        }
        if (currSum < 0) {
            currSum = 0
        }
        // console.log("maxSum: " + maxSum)
        // if (maxSum < 0) maxSum = 0
    }
    
    currSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        currSum = currSum + nums[i];
        console.log("currSum: " + currSum)
        if (minSum > currSum) {
            minSum = currSum
        }
        if (currSum > 0) {
            currSum = 0
        }
        console.log("minSum: " + minSum)
    }
    
    return Math.max(maxSum, Math.abs(minSum))

};