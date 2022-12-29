/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  [2, 3, 2]
*/
var rob = function(nums) {
  let max = nums[0];
  const choice1 = rob1(nums, 0, {});
  const choice2 = rob2(nums, 1, {});
  return Math.max(nums[0], choice1, choice2);
};

var rob1 = function(nums, i, memo) {
  if (i in memo) return memo[i]
  if (i >= nums.length - 1) return 0;
  
  const include = nums[i] + rob1(nums, i+2, memo);
  const exclude = rob1(nums, i+1, memo);    
  memo[i] = Math.max(include, exclude)
  
  return memo[i];
}

var rob2 = function(nums, j, memo) {
  if (j in memo) return memo[j]
  if (j >= nums.length) return 0;
  
  const include = nums[j] + rob2(nums,j+2, memo);
  const exclude = rob2(nums, j+1, memo);    
  memo[j] = Math.max(include, exclude)
  
  return memo[j];
}


