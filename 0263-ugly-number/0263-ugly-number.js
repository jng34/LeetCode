/**
 * @param {number} n
 * @return {boolean}
 */

/*
    Negative numbers are false
    true: 1, 2, 3, 4, 5, 6, 8, 9, 10
    false: 7, 11, 13, 17
    
    create an array of prime numbers to n
*/
var isUgly = function(n) {
    if (n <= 0) return false;
    
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else if (n % 3 === 0) {
            n = n / 3;
        } else if (n % 5 === 0) {
            n = n / 5;
        } else {
            return false;
        }
    }
    
    return true;
};