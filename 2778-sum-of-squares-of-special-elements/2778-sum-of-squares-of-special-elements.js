/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  let sum = 0;
  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += nums[i - 1] * nums[i - 1]
    } 
  }
  return sum;
};