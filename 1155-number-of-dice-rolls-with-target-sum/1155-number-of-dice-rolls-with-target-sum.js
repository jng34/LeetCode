/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */

// Dynamic programming - bottom up approach

var numRollsToTarget = function(n, k, target) {
  // Time: O(n * k * target)
  // Space: O(n * target)
  
  const MOD = 10**9 + 7;	
  
  // dp - 2D array - where first index is number of dice and second is current target value. 
  const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(0));
  
  // There is one way to get 0 dice and 0 target.
  dp[0][0] = 1; 
  
  // Iterate through number of dice
  for (let dice=1; dice<=n; dice++) {
    for (let total=1; total<=target; total++) {
      for (let val=1; val<=k; val++) {
        if (total >= val) {
          dp[dice][total] = (dp[dice][total] + dp[dice-1][total-val]) % MOD;
        } else {
          break;
        }
      }
    } 
  }

  return dp[n][target];
};