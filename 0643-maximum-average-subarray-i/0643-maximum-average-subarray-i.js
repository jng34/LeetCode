/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // sliding window
    let sum = 0;
    for (let i=0; i<k; i++) {
        sum += nums[i];
    }
    
    let maxAvg = sum/k;
    for (let i=k; i<nums.length; i++) {
        sum -= nums[i-k];
        sum += nums[i];
        maxAvg = Math.max(maxAvg, sum/k);
    }
    
    return maxAvg;
};