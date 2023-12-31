/**
 * @param {string} s
 * @return {number}
 */


var maxLengthBetweenEqualCharacters = function(s) {
    // Find first and last indices of each character.
    const freq = {};
    for (let i=0; i<s.length; i++) {
        if (freq[s[i]]) {
            freq[s[i]][1] = i;
        } else {
            freq[s[i]] = [i];
        }
    }
    
    let longest = -1;
    
    // For each character with a start and end index, 
    for (let ch in freq) {
        if (freq[ch].length === 2) {
            const [start, end] = freq[ch];
            // update longest substring
            // Find difference + (-1) to exclude the two characters
            longest = Math.max(longest, end-start-1);
        }
    }
    
    return longest;
};