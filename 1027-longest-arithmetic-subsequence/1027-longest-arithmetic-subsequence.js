/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const freq = {};
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!(i in freq)) freq[i] = {};
        for (let j = 0; j < i; j++) {
            const rem = nums[i] - nums[j];
            freq[i][rem] = (freq[j][rem] || 1) + 1;
            max = Math.max(max, freq[i][rem]);
        }
    }
    
    return max;
};

