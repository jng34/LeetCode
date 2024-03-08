/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    // use hash map to count freq of each num
    const freq = {};
    nums.forEach(n => {
        freq[n] = (freq[n] || 0) + 1;
    })
    
    // find max frequency
    const maxFreq = Math.max(...Object.values(freq));
    
    let total = 0;
    
    // count all elements with max frequency
    for (let n in freq) {
        if (freq[n] === maxFreq) total += maxFreq;
    }
    
    return total;
};