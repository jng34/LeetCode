/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

// Precompute number of 0s and 1s for each row and col
// using rowCtOnes, colCtOnes, rowCtZeroes, colCtZeroes
// dfCreate and return diff array.

var onesMinusZeros = function(grid) {
  let diff = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(0))
  let onesRow = new Array(grid.length).fill(0);
  let zeroesRow = new Array(grid.length).fill(0);
  let onesCol = new Array(grid[0].length).fill(0);
  let zeroesCol = new Array(grid[0].length).fill(0);
  
  // Fill onesRow, onesCol, zeroesRow, zeroesCol;
  for (let r=0; r<grid.length; r++) {
    for (let c=0; c<grid[0].length; c++) {
      if (grid[r][c] === 1) {
        onesRow[r]++;
        onesCol[c]++;
      } else {
        zeroesRow[r]++;
        zeroesCol[c]++;
      }
    }
  }
  
  // Fill diff array.
  for (let r=0; r<diff.length; r++) {
    for (let c=0; c<diff[0].length; c++) {
      diff[r][c] = onesRow[r] + onesCol[c] - zeroesRow[r] - zeroesCol[c];
    }
  }
  
  return diff;
};