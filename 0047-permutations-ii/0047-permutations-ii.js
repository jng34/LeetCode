/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const solution = [];
  nums.sort((a,b) => a-b);
  
  function backTrack(nums, path) {
    if (nums.length === 0) {
      return solution.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue;
      backTrack([...nums.slice(0,i), ...nums.slice(i+1)], [...path, nums[i]]) 
    }
  }
  
  backTrack(nums, []);
  return solution;
};