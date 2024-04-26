/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ans = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.indexOf(x) != -1) {
            ans.push(i);
        }
    }
    
    return ans;
};