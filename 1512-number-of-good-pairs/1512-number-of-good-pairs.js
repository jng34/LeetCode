/**
 * @param {number[]} nums
 * @return {number}
 */

// Create freq hashmap of elems.
// For each key > 2:
//   Increment pairs by combination formula: x(x-1)/2

var numIdenticalPairs = function(nums) {
  let pairs = 0;
  const freq = {};
  
  nums.forEach((n) => freq[n] = (freq[n] || 0) + 1);
  
  for (let n in freq) {
    if (freq[n] >= 2) {  
      pairs += freq[n]*(freq[n]-1)/2;
    }
  }
  
  return pairs; 
};