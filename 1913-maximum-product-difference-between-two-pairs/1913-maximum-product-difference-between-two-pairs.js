/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) { 
  // Iterate through nums to find max1, max2, min1, min2
  let max1=-Infinity, max2=-Infinity, min1=Infinity, min2=Infinity;
  
  for (let n of nums) {
    
    // Update max1 and max2
    if (n > max1) {
      max2 = max1;
      max1 = n;
    } else {
      max2 = Math.max(n, max2);
    }
    
    // Update min1 and min2
    if (n < min1) {
      min2 = min1;
      min1 = n;
    } else {
      min2 = Math.min(n, min2);
    }
  }
  
  return (max1*max2)-(min1*min2);
};