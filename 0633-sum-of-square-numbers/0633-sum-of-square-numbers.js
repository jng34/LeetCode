/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    // c = 5
    // 5-1 = 4
    
    // i=2

    let bank = new Set();
    let i = 0;
    while (i*i <= c) {
        bank.add(i*i);
        const diff = c - i*i; 
        if (bank.has(diff)) return true;
        i++;
    } 
    return false;
};