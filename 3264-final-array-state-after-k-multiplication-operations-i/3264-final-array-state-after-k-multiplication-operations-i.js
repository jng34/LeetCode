/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  const ans = [...nums];
  while (k > 0) {
    const minVal = Math.min(...ans);
    const idx = ans.indexOf(minVal);
    ans[idx] *= multiplier;
    k--;
  }
  return ans;
};