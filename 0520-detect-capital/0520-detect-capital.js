/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const caps = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
    const alpha = new Set([...caps]);
    const len = word.length;
    let capCount = 0;
    
    for (let ch of word) {
        if (alpha.has(ch)) capCount++;
    }
    
    if (capCount === len || capCount === 0) return true;
    if (capCount === 1 && alpha.has(word[0])) {
        return true;
    } else {
        return false;
    }
};