/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */

// Dynamic programming
// if total is 0, increment count by 1.
// if dice is 0, return
// for each value from 1 to k,
// Recursively call helper(dice - 1, total - value, memo)  


var numRollsToTarget = function(n, k, target) {
  const MOD = 10**9 + 7;	
  const memo = Array(n + 1).fill(-1).map(() => Array(target + 1).fill(-1));
  return countWays(n, target, memo);
  
  function countWays(dice, total, memo) {
    // Base cases
    if (dice * k < total) return 0;
    if (total < 0) return 0;
    if (dice === 0) return total === 0 ? 1 : 0;
    
    if (memo[dice][total] !== -1) return memo[dice][total];
  
    let count = 0;

    for (let val=1; val<=k; val++) {
      count = (count + countWays(dice-1, total-val, memo)) % MOD;
    }

    // Memoization to avoid TLE
    memo[dice][total] = count % MOD;
    
    return memo[dice][total]; 
  }
  
  
};