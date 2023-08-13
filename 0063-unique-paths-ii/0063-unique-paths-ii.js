/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let seen = {};
  const rowLength = obstacleGrid.length;
  const colLength = obstacleGrid[0].length;
  return findPaths(0, 0);

  function findPaths(r, c) {
    const path = r + ',' + c;
    if (path in seen) return seen[path];
    if (r === rowLength || c === colLength || obstacleGrid[r][c] === 1) return 0; // boundary check
    if (r === rowLength - 1 && c === colLength - 1) return 1;
    
    seen[path] = findPaths(r + 1, c) + findPaths(r, c + 1)
    return seen[path];
  }
};