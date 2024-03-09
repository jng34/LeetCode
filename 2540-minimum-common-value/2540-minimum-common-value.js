/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  // iterate through both nums1 and nums2
  // use two pointers to track elements
  // increment p1 if nums1 elem < nums2 elem, 
  // else increment p2
  
  let p1 = 0, p2 = 0;
  const n = nums1.length, m = nums2.length;
  
  while (p1 < n && p2 < m) {
    if (nums1[p1] === nums2[p2]) return nums1[p1];
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  
  return -1;
};