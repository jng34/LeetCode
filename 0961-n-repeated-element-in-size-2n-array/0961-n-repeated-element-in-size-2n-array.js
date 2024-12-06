/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  // Find n
  const n = nums.length / 2;
  
  // Save freq of each num 
  const freq = {};
  nums.forEach((n) => freq[n] = (freq[n] || 0) + 1);
  
  // For each num in freq, return the num where freq[num] == n
  for (let num in freq) {
    if (freq[num] === n) return +num;
  }
};