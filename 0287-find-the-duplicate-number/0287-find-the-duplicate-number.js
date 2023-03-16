/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    for (let key in freq) {
        if (freq[key] > 1) return key;
    }
};