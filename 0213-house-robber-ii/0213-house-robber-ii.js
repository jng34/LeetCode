/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Dynamic Programming bottom up approach - tabulation
    const n = nums.length;
    if (n === 1) return nums[0];
    return Math.max(helper1(), helper2());
    
    function helper1() {
        // Do not try the last house
        const dp = new Array(n-1).fill(0);        
        dp[0] = nums[0];
        dp[1] = Math.max(dp[0], nums[1]);
        for (let i=2; i<n-1; i++) {
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
        }
        return dp[n-2];
    }
    
    function helper2() {
        //skip first house
        const dp = new Array(n-1).fill(0);        
        dp[1] = nums[1];
        dp[2] = Math.max(dp[1], nums[2]);
        for (let i=3; i<n; i++) {
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
        }
        return dp[n-1];
    }
};