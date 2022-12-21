/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newStr = s.trim().split(/\s+/)
    return newStr[newStr.length - 1].length;
};