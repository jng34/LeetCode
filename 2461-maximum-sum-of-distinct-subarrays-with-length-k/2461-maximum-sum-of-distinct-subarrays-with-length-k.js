/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function maximumSubarraySum(nums, k) {
  if (new Set(nums).size < k) return 0;

  const n = nums.length;
  let maxSum = 0, currSum = 0;
  const freq = new Map();
  
  for (let i = 0; i < n; i++) {
    const r = nums[i];
    currSum += r;
    freq.set(r, (freq.get(r) || 0) + 1);

    if (i >= k - 1) {
      if (freq.size == k) maxSum = Math.max(maxSum, currSum);
      const l = nums[i - k + 1];
      currSum -= l;
      freq.set(l, freq.get(l) - 1);
      if (freq.get(l) === 0) freq.delete(l);
    }
  }
  return maxSum;
};
