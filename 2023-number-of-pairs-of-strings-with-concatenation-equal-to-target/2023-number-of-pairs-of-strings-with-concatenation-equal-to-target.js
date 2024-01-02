/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */

var numOfPairs = function(nums, target) {
  // Hashmap method
  const map = {};
  let pairs = 0;
  
  // For each num in nums:
  for (let i=0; i<nums.length; i++) {    
    
    // Check if nums[i] is a prefix of target.
    if (target.startsWith(nums[i])) {  
      
      // Suffix
      const suffix = target.substring(nums[i].length);
      // Check in map for suffix and increment pairs by num of suffix.
      if (suffix in map) pairs += map[suffix];
    } 
    
    if (target.endsWith(nums[i])) {
      
      // Prefix
      const prefix = target.substring(0, target.length - nums[i].length);
      // Check in map for prefix and increment pairs by num of prefix.
      if (prefix in map) pairs += map[prefix];
    }
    
    // Track num of prefix occurences.
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  
  return pairs; // Return pairs.   
};