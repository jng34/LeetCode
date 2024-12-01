/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  // Use a set to track seen numbers already
  // Iterate through nums to see if original exists
  // If so, double the original value
  // Repeat until original is not contained in set  seen
  
  const seen = new Set(nums);
  
  while (seen.has(original)) {
    original *= 2;
  }
  
  return original;
};