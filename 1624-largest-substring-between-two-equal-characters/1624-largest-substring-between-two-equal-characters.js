/**
 * @param {string} s
 * @return {number}
 */





var maxLengthBetweenEqualCharacters = function(s) {
    // Find characters that appear more than once.
    const freq = {};
    for (let i=0; i<s.length; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1;
    }
    
    let longest = -1;
    
    // For each character, find the start and end indices
    for (let ch in freq) {
        if (freq[ch] > 1) {
            let l = 0;
            let r = s.length-1;
            while (s[l] !== ch) {
                l++;
            }
            while (s[r] !== ch) {
                r--;
            }
            // update longest substring
            // Find difference + (-1) to exclude the two characters
            longest = Math.max(longest, r-l-1);
        }
    }
    
    return longest;
};