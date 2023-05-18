/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return '';
    let longest = 1;
    let subStr = s[0];
    for (let i = 1; i < s.length; i++) {
        if (subStr.includes(s[i])) {
            const index = subStr.indexOf(s[i]);
            subStr = subStr.slice(index + 1) + s[i];
        } else {
            subStr += s[i];
        }
        longest = Math.max(longest, subStr.length);
    }
    return longest;
};