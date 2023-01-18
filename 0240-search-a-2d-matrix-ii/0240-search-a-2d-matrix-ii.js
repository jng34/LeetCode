/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0, right = n - 1;
  
  while (left < m && right >= 0) {
    if (matrix[left][right] === target) {
      return true;
    } else if (matrix[left][right] < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return false;
};