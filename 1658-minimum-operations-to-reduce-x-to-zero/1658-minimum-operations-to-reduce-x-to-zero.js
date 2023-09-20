/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const sum = nums.reduce((a,b) => a+b, 0);
    // Find diff, which is the sum of subarray leftover
    const diff = sum - x;
    let subSum = 0;
    let maxSubLen = -Infinity;
    
    let i=0;
    for (let j = 0; j < nums.length; j++) {
        subSum += nums[j];
        while (i <= j && subSum > diff) {
            subSum -= nums[i++];
        }
        if (subSum === diff) {
            maxSubLen = Math.max(maxSubLen, j-i+1);
        }
    }

    return maxSubLen >= 0 ? nums.length - maxSubLen : -1;
};