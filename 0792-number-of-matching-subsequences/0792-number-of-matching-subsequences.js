/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    function isSubsequence(word, s) {
        let idx = -1;
        for(let i=0;i<word.length;i++){
            idx=s.indexOf(word[i],idx+1);
            if(idx===-1) return false;
        }
        return true;
    }
    
    let count = 0;
    let seen = {};
    for (let word of words) {
        seen[word] = (seen[word] || 0) + 1;
    }
    for (let word in seen) {
        const check = isSubsequence(word, s);
        if (check) count += seen[word];
    }
    return count;
};
