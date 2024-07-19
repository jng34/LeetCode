/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let minVals = new Set();
  let maxVals = new Set();
  const m = matrix.length;
  const n = matrix[0].length;
  
  // iterate to find all min vals in each row
  for (let r=0; r<m; r++) {
    let min = Infinity;
    for (let c=0; c<n; c++) {
      if (matrix[r][c] < min) min = matrix[r][c];
    }
    minVals.add(min);
  }
  
  // iterate to find all max vals in each col
  for (let c=0; c<n; c++) {
    let max = -Infinity;
    for (let r=0; r<m; r++) {
      if (matrix[r][c] > max) max = matrix[r][c];
    }
    maxVals.add(max);
  }
  
  let luckies = [];
  // iterate through matrix to find lucky numbers
  for (let r=0; r<m; r++) {
    for (let c=0; c<n; c++) {
      const val = matrix[r][c];
      if (minVals.has(val) && maxVals.has(val)) {
        luckies.push(val);
      }
    }
  }
  
  return luckies;
};