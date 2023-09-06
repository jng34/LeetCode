/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max = Math.max(...nums);
    const maxIdx = nums.indexOf(max);
    for (let n of nums) {
        if (n !== max) {
            if (!(max/n >= 2)) return -1;
        }
    }
    return maxIdx;
};