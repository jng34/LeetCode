/**
 * @param {number[]} nums
 * @return {number}
 */

// Find the two max values of nums
// Use two variables max, secMax to store values
// Iterate through nums to find max and secMax
// Return the product of their values minus 1

var maxProduct = function(nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  
  // Find max and second max nums.
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    } else {
      max2 = Math.max(max2, nums[i]);
    }
  }
  
  return (max1-1)*(max2-1);
};