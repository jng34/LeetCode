/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  const n = arr.length;
  // dynamic programming - bottom up approach using hashmap
  // dp array will store the longest subseq at each index
  const dp = {};
  let longest = 1;

  for (let i = 0; i < n; i++) {
    const num = arr[i];
    const val = num - difference;
    dp[num] = (dp[val] || 0) + 1;
    longest = Math.max(longest, dp[num]);
  }

  return longest;
};
