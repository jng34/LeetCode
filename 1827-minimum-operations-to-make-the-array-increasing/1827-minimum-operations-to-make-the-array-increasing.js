/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let ops = 0;
  for (let i=1; i<nums.length; i++) {
    while (nums[i] <= nums[i-1]) {
      nums[i]++;
      ops++;
    }
  }
  return ops;
};