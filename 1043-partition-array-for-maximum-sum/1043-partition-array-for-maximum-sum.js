/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  // Dynamic programming: bottom-up approach
  const n = arr.length;
  const dp = new Array(n+1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    
    let max = 0, maxVal = 0;
    
    for (let j = 1; j <= k && i - j >= 0; j++) {
      maxVal = Math.max(arr[i - j], maxVal);
      max = Math.max(max, maxVal*(j) + dp[i - j]);
    }

    dp[i] = max;
  }

  return dp[n];
};