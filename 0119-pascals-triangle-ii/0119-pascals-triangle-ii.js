/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // Initialize rows with empty arrays
  const pascals = new Array(rowIndex + 1).fill([]);
  for (let row = 0; row < pascals.length; row++) {
    pascals[row] = new Array(row + 1).fill(0);
  }
  pascals[0] = [1];
  pascals[1] = [1, 1];
  
  for (let i = 2; i < pascals.length; i++) {
    // Each row always has 1 in the beginning and end
    pascals[i][0] = 1;
    pascals[i][pascals[i].length-1] = 1;
    
    for (let j = 1; j < pascals[i].length-1; j++) {
      const prevRow = pascals[i-1];
      pascals[i][j] = prevRow[j-1] + prevRow[j];
    }
  }
  
  return pascals[rowIndex];
};