/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
  Two pointers, l and r.
  Two passes, starting from 1 and length of arr - 2.
  Check indices from i = 1 for strictly increasing until 
  we reach an index that doesn't fit condition.
  Apply same check from the right i.e. length of arr - 2.
  If l == r, then true, else false (return l === r).
*/

var validMountainArray = function(arr) {
  const n = arr.length;
  
  let l = 1, r = n - 2;
  
  while (l < n) {
    if (arr[l-1] >= arr[l]) {
      l--;
      break;
    }
    l++;
  }
  
  while (r >= 0) {
    if (arr[r] <= arr[r+1]) {
      r++;
      break;
    }
    r--;
  }
  
  return l === r;
};