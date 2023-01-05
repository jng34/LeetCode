/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return parseStr(s) === parseStr(t);
};

function parseStr(str) {
    let i = 0, newStr = '';
    while (i < str.length) {
        if (str[i] === '#') {
            newStr = newStr.slice(0,-1);
            i++;
        } else if (str[i+1] === '#') {
            i += 2;
        } else {
            newStr += str[i];
            i++;
        }
    }
    return newStr;
}