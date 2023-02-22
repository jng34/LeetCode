/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const solution = [];
  function backTrack(k, path, next) {
    if (k === 0) return solution.push(path.slice());
    
    for (let i = next; i < n + 1; i++) {
      path.push(i);
      backTrack(k - 1, path, i + 1)
      path.pop();
    }
  }
  
  backTrack(k, [], 1);
  return solution;
};