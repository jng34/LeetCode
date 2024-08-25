/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const n = nums.length - 1;
  let l = 0, r = n;
  while (l < r) {
    const m = Math.floor((l + r)/2);
    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l];
};