/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  // Bottom Up - Tabulation method
  nums.sort((a,b) => a-b);
  const combos = new Array(target + 1).fill(0);
  // 1 combo to make target of 0...empty array []
  combos[0] = 1
  
  for (let t = 0; t < combos.length; t++) {
    for (let num of nums) {
      if (num > t) break;
      combos[t] += combos[t - num];
    }
  }
  
  return combos[target];  
  
  // Top Down - Memoization method
  // Base cases
//   if (target < 0) return 0; // no possible combos
//   if (target === 0) return 1; // only possible combo is []
//   if (target in memo) return memo[target];
  
//   let count = 0;
  
//   for (let num of nums) {
//     if (num <= target) {
//       const diff = target - num;
//       count += combinationSum4(nums, diff, memo);
//     }
//   }
  
//   memo[target] = count;
//   return count;
  
};