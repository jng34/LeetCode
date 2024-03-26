/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let ans = [];
  const n = nums.length;

  // use the absolute value of the nums (minus 1) as an idx
  // if nums[m - 1] is negative, then m is a duplicate
  // modify nums[m - 1] to be negative.
  for (let i = 0; i < n; i++) {
    const m = Math.abs(nums[i]);
    if (nums[m - 1] < 0) {
      ans.push(m);
    }
    nums[m - 1] *= -1;
  }

  return ans;
};
