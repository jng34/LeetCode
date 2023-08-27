/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const wordArr = s.split(' ');
    for (let i=0; i<wordArr.length; i++) {
        wordArr[i] = reverseStr(wordArr[i]);
    }
    return wordArr.join(' ');
    
    
    function reverseStr(str) {
        let res = '';
        for (let i=str.length-1; i>=0; i--) {
            res += str[i];
        }
        return res;
    }
};