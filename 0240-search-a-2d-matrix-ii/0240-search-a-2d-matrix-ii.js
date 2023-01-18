/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  
  //Search for target in targeted arrays
  var helper = function(startRow, endRow) {
    let col = 0;
    for (let row = startRow; row <= endRow; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] > target) break;
      }
    }
    return false;
  }
  
  //Binary search for possible array containing target
  let left = 0, right = matrix.length - 1;
  while (left <= right) {
    if (target < matrix[right][0]) {
      right -= 1;
    } else if (target > matrix[right][0]) {
      if (target <= matrix[right][matrix[right].length - 1]) {
        console.log(left, right)
        return helper(left, right);
      } else {
        left += 1;
      }
    } else {
      return true;
    }
  }
  return false;
};