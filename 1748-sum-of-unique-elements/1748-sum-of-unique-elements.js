/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const freq = {};
    let sum = 0;
    nums.forEach(n => freq[n] = (freq[n] || 0) + 1);
    for (let n in freq) {
        if (freq[n] === 1) sum+=Number(n);
    }
    return sum;
};