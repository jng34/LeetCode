/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*
    Initialize carry = 0
    Iterate through digits arry from last index - Add 1 and add carry
    If sum > 9, then carry = 1 
    O(n) time
    O(1) space
*/

var plusOne = function(digits) {
    
    let carry = 1;
    let i = digits.length - 1;
    // let ones = digits[i] + 1;
    // if (ones > 9) {
    //     digits[i] = 0;
    //     carry = 1;
    // } else {
    //     digits[i] = ones;
    // }
    // i--;
    
    while (i > 0) {

        let val = digits[i] + carry;
        if (val > 9) {
            digits[i] = 0
            carry = 1;
        } else {
            digits[i] = digits[i] + carry;
            carry = 0;
        }
        i--;
    }
    
    if (digits[0] + carry > 9) {
        digits[0] = 0;
        digits.unshift(1);
    } else {
        digits[0] = digits[0] + carry;
    }
    
    return digits;
  
};