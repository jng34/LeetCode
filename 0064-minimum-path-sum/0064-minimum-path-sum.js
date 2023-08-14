/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length, n = grid[0].length;
  let seen = {};
  return findMinPath(0, 0);
  
  function findMinPath(r, c) {
    const pos = r + ',' + c;
    if (pos in seen) return seen[pos];
    if (r === m || c === n) return Infinity;
    if (r === m - 1 && c === n - 1) return grid[r][c];
    
    seen[pos] = Math.min(
      grid[r][c] + findMinPath(r + 1, c),
      grid[r][c] + findMinPath(r, c + 1)
    );
    return seen[pos];
  }
};
