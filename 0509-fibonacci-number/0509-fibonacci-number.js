/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // Bottom - top approach
    let dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i=2; i<dp.length; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};