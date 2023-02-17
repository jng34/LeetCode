/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combo = [];
    let results = [];
    
    // BackTracking 
    function findCombos(i, target) {
        if (i === candidates.length) return;
        if (target < 0) return;
        if (target === 0) {
            results.push(combo.slice());
            return;
        }
        combo.push(candidates[i]);
        findCombos(i, target - candidates[i]);
        combo.pop();
        findCombos(i + 1, target);
    }

    findCombos(0, target);
    return results;
};



