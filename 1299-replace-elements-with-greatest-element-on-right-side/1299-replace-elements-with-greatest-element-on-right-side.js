/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const n = arr.length;
  // Base case
  if (n === 1) return [-1];

  let result = new Array(n);
  
  // Track curr max value.
  let currMax = -Infinity;
  
  // Set last element in result array to be -1 and sec last to be last element.
  result[n - 1] = -1;
  
  // Two pointers, i and j to track arr and result respectively, while updating result.
  let i = n - 1, j = n - 2;
  
  while (j >= 0) {
    // Update curr max
    currMax = Math.max(currMax, arr[i]);
    
    // Assign curr max to curr index in result
    result[j] = currMax;
    
    // decrement i and j
    i--;
    j--;
  }
  
  return result;
};