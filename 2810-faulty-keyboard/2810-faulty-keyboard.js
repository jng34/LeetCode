/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res = [];
    for (let c of s) {
        if (c === 'i') {
            res.reverse();
        } else {
            res.push(c);
        }
    }
    return res.join('');
};