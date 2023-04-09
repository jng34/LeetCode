/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set();
  let count = 0;
  
  
  // check for each land on the boundary and mark as visited i.e. set to 0
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
        checkForLand(r, c, grid, visited);
      } 
    }
  }
  
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // Check for isolated lands
      const pos = r + ',' + c;
      if (grid[r][c] === 1 && !visited.has(pos)) count++;
    }
  }
  
  return count;
};


const checkForLand = (r, c, grid, visited) => {
  const pos = r + ',' + c;
  if (visited.has(pos)) return;
  
  if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
    visited.add(pos);
    checkForLand(r-1, c, grid, visited);
    checkForLand(r+1, c, grid, visited);
    checkForLand(r, c-1, grid, visited);
    checkForLand(r, c+1, grid, visited);
  } 
}