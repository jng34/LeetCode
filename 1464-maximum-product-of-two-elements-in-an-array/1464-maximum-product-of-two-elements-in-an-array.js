/**
 * @param {number[]} nums
 * @return {number}
 */

// Find the two max values of nums
// Use two variables max, secMax to store values
// Iterate through nums to find max and secMax
/*
  e.g. [3,5,7,5]
  max1 = 3
  max2 = 7
  
*/
// Return the product of their values minus 1

var maxProduct = function(nums) {
  nums.sort((a,b) => b-a);
  return (nums[0]-1)*(nums[1]-1);
};