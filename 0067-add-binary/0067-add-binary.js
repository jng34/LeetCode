/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 11
// 1 
// 0
var addBinary = function(a, b) {
    let num1 = a.split('').map(Number).reverse()
    let num2 = b.split('').map(Number).reverse()
    let i = 0, carry = 0, result = [];
    while (i < num1.length || i < num2.length || carry) {
        const sum = (num1[i] ? num1[i] : 0) + (num2[i] ? num2[i] : 0) + carry;
        if (sum == 2) {
            result.push(0);
            carry = 1;
        } else if (sum == 3) {
            result.push(1);
            carry = 1;
        } else {
            result.push(sum)
            carry = 0;
        }
        i++;
    }
    return result.reverse().join('')
};