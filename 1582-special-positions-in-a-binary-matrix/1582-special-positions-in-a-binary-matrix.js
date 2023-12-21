/**
 * @param {number[][]} mat
 * @return {number}
 */

// Pre-compute ones using arrays for rowCount and colCount
// Iterate through each square in matrix
// If square = 1, 
//   then check if rowCount = 1 and colCount = 1 
//   if true, then increment count
// Return count.

var numSpecial = function(mat) {
  // Track special count.
  let count = 0;
  
  // Count all 1s in each row and column.
  let rowCount = new Array(mat.length).fill(0);
  let colCount = new Array(mat[0].length).fill(0);
  
  for (let r=0; r<mat.length; r++) {
    for (let c=0; c<mat[0].length; c++) {
      if (mat[r][c] === 1) {
        rowCount[r]++;
        colCount[c]++;
      }
    }
  }
  
  // Iterate through rolCount and colCount arrays.
  for (let r=0; r<rowCount.length; r++) {
    if (rowCount[r] === 1) {
      for (let c=0; c<colCount.length; c++) {
        if (colCount[c] === 1 && mat[r][c] === 1) {
          count++;
          break;
        }
      }
    }
  }
  
  return count;
};