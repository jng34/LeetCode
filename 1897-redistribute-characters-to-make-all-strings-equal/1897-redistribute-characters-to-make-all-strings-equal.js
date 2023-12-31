/**
 * @param {string[]} words
 * @return {boolean}
 */

// Count the number of occurences for each letter
// For each letter, check to see if it is divisible by words length
// Return false if not, else true

var makeEqual = function(words) {
    const freq = {};
    words.forEach(word => {
        for (let i=0; i<word.length; i++) {
            freq[word[i]] = (freq[word[i]] || 0) + 1;
        }
    })
    
    const n = words.length;

    for (let ch in freq) {
        if (freq[ch] % n !== 0) return false;
    }
    
    return true;
};