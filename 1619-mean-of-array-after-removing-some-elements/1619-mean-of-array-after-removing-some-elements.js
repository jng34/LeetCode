/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  // sort arr in asc order
  // arr.length is multiple of 20 so find 5% of arr.length -> m
  // iterate and sum from i = m to i < arr.length - m
  // find mean of remaining arr
  
  const n = arr.length;
  const m = 0.05 * n; // number to remove from front and back
  arr.sort((a,b) => a-b);
  
  let sum = 0;
  for (let i = m; i < n - m; i++) {
    sum += arr[i];
  }
  
  return sum / (n - 2*m);
};