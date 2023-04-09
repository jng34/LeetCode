/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  // check for each land on the boundary and mark as visited i.e. set to 0
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
        checkForLand(r, c, grid);
      } 
    }
  }
  
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // Check for isolated lands
      if (grid[r][c] === 1) count++;
    }
  }
  
  return count;
};


const checkForLand = (r, c, grid) => {
  if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
    // mark as visited by setting node to 0
    grid[r][c] = 0;
    checkForLand(r-1, c, grid);
    checkForLand(r+1, c, grid);
    checkForLand(r, c-1, grid);
    checkForLand(r, c+1, grid);
  } 
}