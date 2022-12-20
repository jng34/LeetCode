/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n == 0) return 0;
  
  let minCount = Infinity;
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    let square = i**2;
    let count = 1 + numSquares(n - square, memo);
    minCount = Math.min(minCount, count);
  }
  
  memo[n] = minCount;
  return memo[n];
};