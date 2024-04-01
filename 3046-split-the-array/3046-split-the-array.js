/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  // check freq of nums to see if there are any nums that occur 3 or more times
  // return false if so, else true
  
  const freq = {};
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
    if (freq[n] === 3) return false;
  }
  
  return true;
};