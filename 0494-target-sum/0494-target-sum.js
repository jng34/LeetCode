/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // Dynamic programming
  // Find the number of ways to evaluate to target sum using + and -
  const memo = {};
  return calculateTarget(0, 0);

  // Helper function
  function calculateTarget(currSum, idx) {
    if (idx === nums.length) {
      if (currSum === target) {
        return 1; 
      } else {
        return 0;
      }
    }
    const key = currSum + "," + idx;
    if (key in memo) return memo[key];
    
    const add = calculateTarget(currSum + nums[idx], idx + 1); // Add next num "+"
    const subtract = calculateTarget(currSum - nums[idx], idx + 1); // Subtract next num '-'
    
    memo[key] = add + subtract;
    return memo[key];
  }
};