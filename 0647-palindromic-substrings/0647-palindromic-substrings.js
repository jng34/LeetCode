/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {   
    let count = 0;
    for (let i=0; i<s.length; i++) {
        isPalindrome(i, i) //check for odd palindromes
        isPalindrome(i, i+1) //check for even palindromes
    }
    
    function isPalindrome(start, end) {
        while (start >= 0 && end <= s.length && s[start] === s[end]) {
            count++;
            start--;
            end++;
        }
    }
    
    return count;
};
