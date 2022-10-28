/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false;
    
    let lettersObj = {};
    for (let char of s) {
        lettersObj[char] = (lettersObj[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!lettersObj[char]) {
            return false;
        } else {
            lettersObj[char] -= 1;
        }
    }
    
    return true;
};