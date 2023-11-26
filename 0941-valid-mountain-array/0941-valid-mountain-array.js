/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
  Two pointers, l and r.
  Find max num and its index (first occurence), which is the peak.
  Check indices left of peak for strictly increasing.
  Check indices right of peak for strictly decreasing.
*/

var validMountainArray = function(arr) {
  const n = arr.length;
  
  // Find max num in arr (peak).
  const peak = Math.max(...arr);
  
  // Find index of peak.
  const peakIdx = arr.indexOf(peak);
  
  // Return false if peak index is at either end of arr.
  if (peakIdx === 0 || peakIdx === n-1) return false;
  
  // Check indices left of peak for strictly increasing.
  let l = 1;
  while (l <= peakIdx) {
    if (arr[l] <= arr[l-1]) return false;
    l++;
  }
  
  // Check indices right of peak for strictly decreasing.
  let r = n-2;
  while (r >= peakIdx) {
    if (arr[r] <= arr[r+1]) return false;
    r--;
  }
  
  // Return true if left is increasing and right is decreasing
  return true;
};