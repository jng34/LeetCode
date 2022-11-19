/**
 * @param {number} n
 * @return {boolean}
 */

//Recursion 


var isHappy = function(n) {
    let values = new Set();
    while (n !== 1 && !values.has(n)) {
        values.add(n);
        n = getNextNum(n);
    }
    return n === 1; 
};


function getNextNum(num) {
    
    let sum = 0;

    // Use n % 10 to get remainder = ones digit
    // Picking digits off one by one
    
    while (num > 0) {
        let onesDigit = num % 10;
        num = Math.floor(num / 10);
        sum += onesDigit**2;
    }
    return sum;
}
