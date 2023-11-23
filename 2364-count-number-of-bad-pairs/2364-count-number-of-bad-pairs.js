/**
 * @param {number[]} nums
 * @return {number}
 */

// Bad pair: i<j AND j-nums[j] != i-nums[i]
// Good pair: i<j AND j-nums[j] == i-nums[i]
// Bad pairs + Good Pairs = Total pairs
// Bad pairs = Total pairs - good pairs
// pairs = x(x-1)/2
// Create hash table to store freq of diffs
// Return total pairs - good pairs (bad pairs)

// e.g.  nums = [4,1,3,3,4,6,7]
//               i
//                 j
// arr = [0-4, 1-1, 2-3, 3-3, 4-4, 5-6] = [-4, 0, -1, 0, 0, -1]
// arr = [0-1, 1-2, 2-3, 3-4, 4-5] = [-1, -1, -1, -1, -1]

var countBadPairs = function(nums) {
  const n = nums.length;
  const freq = {};
  
  // Find total pairs
  const totalPairs = n*(n-1)/2;
  
  // For each elem, find diff and store freq of diff 
  for (let i=0; i<n; i++) {
    const diff = i-nums[i];
    freq[diff] = (freq[diff] || 0) + 1;
  }
  
  // Find good pairs
  let goodPairs = 0;
  for (let n in freq) {
    if (freq[n] >= 2) {
      goodPairs += freq[n]*(freq[n]-1)/2;
    }
  }

  // bad pairs = total pairs - good pairs
  return totalPairs - goodPairs;
};
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               