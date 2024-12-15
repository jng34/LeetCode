/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(nums, x) {
  let oddScore = nums[0], evenScore = nums[0], maxScore = nums[0];
  if (nums[0] % 2 === 0) {
    oddScore -= x;
  } else {
    evenScore -= x;
  }
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenScore = Math.max(evenScore + nums[i], oddScore + nums[i] - x);
      maxScore = Math.max(maxScore, evenScore);
    } else {
      oddScore = Math.max(oddScore + nums[i], evenScore + nums[i] - x);
      maxScore = Math.max(maxScore, oddScore);
    }
  }
  
  return maxScore;
};