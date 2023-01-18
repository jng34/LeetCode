/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  
  //Binary search for targetSearch
  var targetSearch = function(index) {
    let left = 0, right = matrix[index].length-1;
    while (left <= right) {
      let mid = Math.floor((left + right)/2);
      if (target < matrix[index][mid]) {
        right = mid - 1;
      } else if (target > matrix[index][mid]) {
        left = mid + 1;
      } else {
        return true;
      }
    }
    return false;
  }
  
  
  //Binary search for possible array containing target
  let left = 0, right = matrix.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (target < matrix[mid][0]) {
      right = mid-1;
    } else if (target > matrix[mid][0]) {
      if (target <= matrix[mid][matrix[mid].length-1]) {
        return targetSearch(mid);
      } else {
        left = mid+1;
      }
    } else {
      return true;
    }
  }
  
  return false;
  
};