/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    const nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    let ans = 0;
    findPerms(0);
    return ans;
    
    
    // create permutations of all integers from [1,n] 
    function findPerms(idx) {
        if (idx === nums.length) ans++;
        for (let i = idx; i < nums.length; i++) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            if (nums[idx] % (idx + 1) === 0 || (idx + 1) % nums[idx] === 0) {
                findPerms(idx + 1);
            }
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }
};