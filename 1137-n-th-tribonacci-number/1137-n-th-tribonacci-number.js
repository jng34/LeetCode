/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n, memo={}) {
  // Top Down Approach - memoization
  // base cases
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  
  memo[n] = tribonacci(n-3, memo) + tribonacci(n-2, memo) + tribonacci(n-1, memo);
  return memo[n];
  
  
  // Bottom Up Approach - tabulation method
//   const seq = new Array(n + 1).fill(0);
//   seq[0] = 0;
//   seq[1] = 1;
//   seq[2] = 1;
  
//   for (let i = 3; i < seq.length; i++) {
//     seq[i] += seq[i-3] + seq[i-2] + seq[i-1];
//   }
  
//   return seq[n];
  
};