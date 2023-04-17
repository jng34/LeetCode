/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const end = nums.length-1;
  let max = 0;
  let i = 0;
  
  while (i < nums.length) {
    max = Math.max(max, i + nums[i]);
    if (max >= end) return true;
    if (max <= i && nums[i] === 0) return false;
    i++;
  }
  
  return false;
};