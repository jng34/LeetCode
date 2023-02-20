/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target, memo={}) {
  // Base cases
  if (target < 0) return 0; // no possible combos
  if (target === 0) return 1; // only possible combo is []
  if (target in memo) return memo[target];
  
  let count = 0;
  
  for (let num of nums) {
    if (num <= target) {
      const diff = target - num;
      count += combinationSum4(nums, diff, memo);
    }
  }
  
  memo[target] = count;
  return count;
};