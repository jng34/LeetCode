/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // Dynamic programming
  // Find the number of ways to evaluate to target sum using + and -
  let ans = 0;
  calculateTarget(nums[0], 1);
  calculateTarget(-nums[0], 1);
  return ans;
  
  
  // Helper function
  function calculateTarget(currVal, idx) {
    if (idx === nums.length) {
      if (currVal === target) {
        return ans++;
      } else {
        return;
      }
    }
    calculateTarget(currVal + nums[idx], idx + 1); // Add next num "+"
    calculateTarget(currVal - nums[idx], idx + 1); // Subtract next num '-'
  }
};