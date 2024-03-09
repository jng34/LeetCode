/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  // iterate through both nums1 and nums2
  // use a set to track 'seen' numbers in nums1
  // if set has number, return num
  
  const seen = new Set();  
  nums1.forEach(n => seen.add(n));
  
  for (let n of nums2) {
    if (seen.has(n)) return n;
  }
  
  return -1;
};