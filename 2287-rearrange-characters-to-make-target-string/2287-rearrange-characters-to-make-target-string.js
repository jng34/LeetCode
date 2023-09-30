/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const targetFreq = {};
    for (let ch of target) {
        targetFreq[ch] = (targetFreq[ch] || 0) + 1;
    }
    
    const strFreq = {};
    for (let ch of s) {
        strFreq[ch] = (strFreq[ch] || 0) + 1;
    }
    
    let count = 0;
    let valid = true;
    while (valid) {
        for (let ch in targetFreq) {
            if (!strFreq[ch] || targetFreq[ch] > strFreq[ch]) {
                valid = false;
                break;
            }
            strFreq[ch] = strFreq[ch] - targetFreq[ch];
        }
        if (valid) count++;
    }
    
    return count;
};