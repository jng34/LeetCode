/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    // dp - bottom up approach
    const dp = new Array(n + 1).fill(1000);
    dp[1] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i/2; j++) {
            if (i % j === 0) {
                dp[i] = Math.min(dp[i], dp[j] + i/j)
            }
        }
    }
    return dp[n];
};