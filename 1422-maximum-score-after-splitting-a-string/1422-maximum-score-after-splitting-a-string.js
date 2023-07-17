/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let sumOfOnes = 0;
    let sumOfZeroes = 0;
    let maxScore = sumOfOnes + sumOfZeroes;
    
    for (let char of s) {
        if (char === '1') sumOfOnes++;
    }
        
    for (let i=0; i<s.length-1; i++) {
        if (s[i] === '0') {
            sumOfZeroes++;
        } else {
            sumOfOnes--;
        }
        maxScore = Math.max(maxScore, sumOfOnes + sumOfZeroes);
    }
    
    return maxScore;
};