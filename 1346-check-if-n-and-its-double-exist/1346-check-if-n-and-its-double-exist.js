/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  // Iterate through each index i in arr
  for (let i = 0; i < arr.length - 1; i++) {
    // For each i, iterate from i + 1 to arr.length to see if arr[i] == 2 * arr[j]
    for (let j = i + 1; j < arr.length; j++) {
      // If so, return true
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) return true;
    }
  }
  
  
  
  return false;
};