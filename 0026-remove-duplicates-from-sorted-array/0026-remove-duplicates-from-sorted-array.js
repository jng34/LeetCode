/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
  let prev = 0, curr = 1;
  while (curr < nums.length) {
    if (nums[curr] == nums[prev]) {
      nums.splice(curr, 1);
    } else {
      prev = curr
      curr++;
    }
  }
};