/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
  // Brute Force
  let triplets = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (i < j && j < k) {
          if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
            triplets++;
          }
        }
      }
    }
  }
  
  return triplets;
};