/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // Store freq of each num in a hashmap
  const freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  
  //Find the num associated with minFreq
  for (let key in freq) {
    if (freq[key] === 1) return key;
  }
  
};