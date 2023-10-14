/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Bottom up approach - tabulation
    const n = nums.length;
    if (n === 1) return nums[0];
    const dp = new Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i=2; i<nums.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1]);
    }
    return dp[n-1];
};