/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  // O(m x n) time
  // O(m + n) space
  
  // iterate through rows and cols of matrix
  // if el = 0, set entire row and col into 0  
  const m = matrix.length;
  const n = matrix[0].length;
  
  // track all rows and cols with 0s
  const rows = new Set();
  const cols = new Set();

  // find all 0s in matrix
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const el = matrix[r][c];
      if (el === 0) {
        rows.add(r);
        cols.add(c);
      }
    }
  } 
  
  // modify matrix in place
  for (let r = 0; r < m; r++) {
    if (rows.has(r)) {
      matrix[r] = new Array(n).fill(0);
      continue;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c)) matrix[r][c] = 0;
    }
  } 
  
};