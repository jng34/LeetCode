/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  // Try every non-zero cell
  // Use recursion to get total gold
  // Find max of each path
  const visited = {};
  let maxGold = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      maxGold = Math.max(maxGold, findMaxGold(r, c, 0)); 
    }
  }
  return maxGold;
  
  
  function findMaxGold(r, c, gold) {
    const cell = r+','+c;
    
    // check bounds & if cell has 0 gold
    const rowInbound = (r >= 0) && (r < m);
    const colInbound = (c >= 0) && (c < n);
    if (visited[cell] || !rowInbound || !colInbound || grid[r][c] === 0) return gold;
    
    gold += grid[r][c];
    visited[cell] = true;
    
    let maxGold = 0;
    
    // Four directions: U, D, R, L
    const directions = [
      [0, 1], [0, -1], [1, 0], [-1, 0]
    ];
    
    for (let dir of directions) {
      const [row, col] = dir;
      maxGold = Math.max(
        maxGold, 
        findMaxGold(r + row, c + col, gold)
      );
    }
    
    visited[cell] = false;
    return maxGold;
  }
};