/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  const len = arr.length;
  const ans = [];
  // Sort array
  arr.sort((a,b) => a-b);

  let minAbsDiff = Infinity;
  for (let i = 1; i < len; i++) {
    minAbsDiff = Math.min(minAbsDiff, Math.abs(arr[i-1]-arr[i]));
  }
  
  // Two pointers to find all paths with abs min diff
  let l = 0, r = 1;
  while (r < len) {
    if (Math.abs(arr[l] - arr[r]) === minAbsDiff) {
      ans.push([arr[l], arr[r]]);
      l = r++;
    } else {
      l++;
      r++;
    }
  }
  
  return ans;
};