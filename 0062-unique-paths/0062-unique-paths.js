/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let rowLength = m-1;
  let colLenght = n-1;
  let seen = {};
  return findPaths(0, 0);
  
  function findPaths(r, c) {
    const pos = r + ',' + c;
    if (pos in seen) return seen[pos];
    if (r === m || c === n) return 0;
    if (r === m-1 && c === n-1) return 1;
    seen[pos] = findPaths(r+1, c) + findPaths(r, c+1);
    return seen[pos];
  }

};