/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sentence = s.split(' ');
    if (pattern.length !== sentence.length) return false;
    
    const dict = {};
    const seenWords = new Set();
    for (let i=0; i<pattern.length; i++) {
        const key = pattern[i];
        const word = sentence[i];
        if (!(key in dict)) {
            if (seenWords.has(word)) return false;
            dict[key] = word;
            seenWords.add(word);
        }
        if (dict[key] !== word) return false
    }
    return true;
};