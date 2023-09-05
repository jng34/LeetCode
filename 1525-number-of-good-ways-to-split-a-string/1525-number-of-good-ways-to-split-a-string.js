/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const left = {};
    const right = {};
    for (let char of s) {
        right[char] = (right[char] || 0) + 1;
    }
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        left[letter] = (left[letter] || 0) + 1;
        right[letter] = right[letter] - 1;
        if (right[letter] === 0) delete right[letter];
        if (Object.keys(left).length === Object.keys(right).length) {
            count++;
        } 
    }
    return count;
};