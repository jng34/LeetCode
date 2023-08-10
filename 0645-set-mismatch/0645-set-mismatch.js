/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [];
    let freq = {};
    const n = nums.length;

    nums.forEach(n => freq[n] = (freq[n] || 0) + 1);
    
    for (let i=1; i<=n; i++) {
        if (!freq[i]) res[1] = i;
        if (freq[i] === 2) res[0] = i;
    }
    
    return res;
};