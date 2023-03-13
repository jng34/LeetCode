/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  const freq1 = {};
  
  // Store frequency of each element in nums1
  for (let n of nums1) {
    freq1[n] = (freq1[n] || 0) + 1;
  }
  
  // Iterate through nums2, check if elem in nums1 hash, 
  // If yes, then add elem to result and decrement nums1 value in hash
  // If elem in hash has a zero value, then you cannot add to result
  for (let n of nums2) {
    if (freq1[n] && freq1[n] > 0) {
      result.push(n);
      freq1[n]--;
    }  
  }
  
  return result;   
};