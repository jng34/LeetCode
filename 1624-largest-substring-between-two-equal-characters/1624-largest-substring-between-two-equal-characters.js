/**
 * @param {string} s
 * @return {number}
 */


var maxLengthBetweenEqualCharacters = function(s) {
    const freq = {};
    let longest = -1;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] in freq) {
            longest = Math.max(longest, i - freq[s[i]] - 1);
        } else {
            freq[s[i]] = i;
        }
    }
    
    return longest;
};