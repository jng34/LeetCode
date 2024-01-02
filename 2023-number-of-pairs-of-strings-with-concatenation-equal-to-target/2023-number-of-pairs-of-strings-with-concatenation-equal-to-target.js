/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */

var numOfPairs = function(nums, target) {
  // Brute force method
  let pairs = 0;
  // For nums[i:nums.length-1):
  for (let i=0; i<nums.length-1; i++) {
    // For num[i+1:nums.length-1]:
    for (let j=i+1; j<nums.length; j++) {
      // if nums[i] + nums[i+1] equals target, increment pairs.
      if (nums[i] + nums[j] === target) pairs++;

      // if nums[i+1] + nums[i] equals target, increment pairs.
      if (nums[j] + nums[i] === target) pairs++;
    }
  }
  
  return pairs; // Return pairs.   
};