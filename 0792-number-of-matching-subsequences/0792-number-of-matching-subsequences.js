/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    function isSubsequence(s, t) {
        let n = 0;
        for(let i=0; i < t.length; i++) {
            if(s[n] === t[i]){
              n++;
            } 
        } 
        return n === s.length;
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
