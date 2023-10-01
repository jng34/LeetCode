/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let wordArr = [];
    let i = 0;
    let reverse = true;
    while (i < s.length) {
        i += k;
        if (reverse) {
            for (let j=i-1; j>=i-k; j--) {
                wordArr.push(s[j])
            }
        } else {
            wordArr.push(...s.slice(i-k, i))
        }
        reverse = !reverse;
    }
    return wordArr.join('');
};