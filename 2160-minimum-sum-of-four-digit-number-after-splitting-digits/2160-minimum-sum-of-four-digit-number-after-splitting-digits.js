/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let nums = String(num);
    let digits = [];
    
    for (let n of nums) {
        digits.push(n);
    }
    digits.sort((a,b) => a-b);
    
    let new1 = '', new2 = '';
    for (let i=0; i<digits.length; i++) {
        i % 2 === 0 ? new1+=digits[i] : new2+=digits[i];
    }
    
    return Number(new1) + Number(new2);
};