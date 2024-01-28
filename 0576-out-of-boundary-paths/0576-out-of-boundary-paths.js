/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const MOD = 10**9 + 7;
  const memo = {};
  return findPathsHelper(maxMove, startRow, startColumn);

  // Helper fn
  function findPathsHelper(moves, r, c) {
    const key = r + ',' + c + ',' + moves;
    if (r < 0 || r === m || c < 0 || c === n) return 1;
    if (moves === 0) return 0;
    if (key in memo) return memo[key];

    let count = 0;
    // Next four moves
    const directions = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]];
    for (let [row, col] of directions) {
      count = (count + findPathsHelper(moves - 1, row, col)) % MOD;
    }
   
    memo[key] = count;
    return count;
  } 
};