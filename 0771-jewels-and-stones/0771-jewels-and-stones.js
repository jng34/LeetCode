/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let j of jewels) {
        for (let s of stones) {
            if (j === s) count++;
        }
    }
    return count;
};