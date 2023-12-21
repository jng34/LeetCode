/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) { 
  // Sort nums in descending order
  nums.sort((a,b) => b-a);
  
  // Find product of first two elems and product of last two elems
  const n = nums.length;
  const maxProd = nums[0]*nums[1];
  const minProd = nums[n-1]*nums[n-2];
  
  // Return difference of products
  return maxProd-minProd;
};