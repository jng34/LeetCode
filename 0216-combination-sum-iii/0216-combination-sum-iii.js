/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let results = [];
    let nums = [1,2,3,4,5,6,7,8,9];
    
    function findCombos(index, path, target, num) {
        if (target < 0) return;
        if (target === 0 && num === 0) return results.push(path.slice());
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            findCombos(i + 1, path, target - nums[i], num - 1);
            path.pop()
        }
    }
    
    findCombos(0, [], n, k);
    return results;
};