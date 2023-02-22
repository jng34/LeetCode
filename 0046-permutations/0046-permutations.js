/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const solution = [];
  function backTrack(index) {
    if (index === nums.length - 1) return solution.push(nums.slice());
    
    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      backTrack(index + 1);
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }
  
  backTrack(0);
  return solution;
};