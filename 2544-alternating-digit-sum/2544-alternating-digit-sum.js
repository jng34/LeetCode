/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum = 0;
    let numStr = String(n);
    let pos = true;
    
    for (let d of numStr) {
        pos ? sum += Number(d) : sum -= Number(d);
        pos = !pos;
    }
    
    return sum;
};