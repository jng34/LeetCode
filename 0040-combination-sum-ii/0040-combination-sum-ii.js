/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const results = [];
  candidates.sort((a,b) => a-b);
  
  // Backtracking
  function searchPath(index, path, target) {
    if (target < 0) return;
    if (target === 0) return results.push(path.slice());
    
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      searchPath(i + 1, path, target - candidates[i]); 
      path.pop();
    }
  };
  
  searchPath(0, [], target);
  return results;
};