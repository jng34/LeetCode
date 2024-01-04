/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  // Dynamic programming: bottom-up approach
  const n = arr.length;
  const dp = new Array(n).fill(0);
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    let max = 0;
    let maxVal = 0;

    for (let j = i; j >= Math.max(0, i-k+1); j--) {
      maxVal = Math.max(arr[j], maxVal);
      if (j === 0) max = Math.max(max, maxVal*(i-j+1));
      if (j > 0) max = Math.max(max, maxVal*(i-j+1) + dp[j-1]);
    }

    dp[i] = max;
  }

  return dp[n-1];
};