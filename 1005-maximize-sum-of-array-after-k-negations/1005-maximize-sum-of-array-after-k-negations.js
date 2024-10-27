/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // sort index in ASC order
  nums.sort((a,b) => a-b);
  
  for (let i = 0; i < nums.length; i++) {
    if (k === 0) {
      return nums.reduce((a,b) => a + b);
    };
    const n = nums[i];
    if (n < 0) {
      nums[i] = -1 * n;
      k--;
    }
  }
  
  nums.sort((a,b) => a-b); // sort again
 
  // if k is odd, then just negate smallest n
  if (k % 2 !== 0) {
    nums[0] = nums[0] * -1;
  }
    
  return nums.reduce((a,b) => a+b);
};