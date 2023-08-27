/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let res = 1;
  let l = 0, r = 1;
  while (r < nums.length) {
    if (nums[r] > nums[r-1]) {
      res = Math.max(res, r-l+1);
    } else {
      l = r;
    }
    r++;
  }
  return res;
};