/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const freq = {};
    for (let letter of magazine) {
        freq[letter] = (freq[letter] || 0) + 1;
    }
    
    for (let letter of ransomNote) {
        if (letter in freq) {
            freq[letter] -= 1
            if (freq[letter] < 0) return false;
        } else {
            return false;
        }
    }
    
    return true;
};