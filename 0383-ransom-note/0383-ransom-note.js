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
        if (!freq[letter]) return false;
        freq[letter]--;
    }
    
    return true;
};