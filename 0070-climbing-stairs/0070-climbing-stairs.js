/**
 * @param {number} n
 * @return {number}
 */

// Fibonacci sequence: 1,1,2,3,5,8
var climbStairs = function(n) {
  const dp = new Array(n+1).fill(0);
  dp[1] = 1; // One way to get to step n = 1
  dp[2] = 2; // Two ways to get to step n = 2
  for (let i = 3; i < n+1; i++) {
    // Each step is the sum of previous two ways
    dp[i] = dp[i-1] + dp[i - 2];
  }
  return dp[n];
};
