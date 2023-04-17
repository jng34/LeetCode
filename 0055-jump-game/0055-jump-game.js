/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;
  
  let jumps = Array(nums.length).fill(-1);
  jumps[0] = nums[0];
  const end = nums.length;
  
  for (let i=1; i<end; i++) {
    // if previous jumps = 0, return false
    if (jumps[i-1] === 0) return false;
    
    // Check if index is reachable by seeing if previous jumps > 0
    if (jumps[i-1] > 0) {
      jumps[i] = Math.max(jumps[i-1]-1, nums[i]);
    }
  }
  
  return jumps[end-1] > -1;
};