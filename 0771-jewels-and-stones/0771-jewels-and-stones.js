/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const freq = {};
    let count = 0;
    
    for (let s of stones) {
        freq[s] = (freq[s] || 0) + 1;
    }
    for (let j of jewels) {
        if (j in freq) count += freq[j];
    }

    return count;
};