/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 11
// 1 
// 0
var addBinary = function(a, b) {
    let a_index = a.length, b_index = b.length, carry = 0, result = '';
    while (a_index || b_index) {
        let sum = (a_index > 0 ? +a[--a_index] : 0) + (b_index ? +b[--b_index] : 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }
    return carry ? carry + result : result;
};