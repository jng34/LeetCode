/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const times = nums.length/3;
    const freq = {};
    nums.forEach(n => freq[n] = (freq[n] || 0) + 1);
    
    let res = [];
    for (let n in freq) {
        if (freq[n] > times) res.push(n);
    }
    
    return res;
};