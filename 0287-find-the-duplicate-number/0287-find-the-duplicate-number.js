/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > 1) return num;
    }
    
};