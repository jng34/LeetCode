/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    /* 
        Pattern: 
        n < 10:  2, 4, 6, 8               -> 4 nums
        10 <= n < 20: 11, 13, 15, 17, 19  -> 5 nums
        20 <= n < 30: 20, 22, 24, 26, 28  -> 5 nums
        30 <= n < 40: 31, 33, 35, 37, 39  -> 5 nums
        ...
        100 <= n < 110: 101, 103, 105, 107, 109
    */
    let count = 0;
    
    for (let i=1; i<=num; i++) {
        let numStr = ''+i;
        let sum = 0;
        for (let d of numStr) {
            sum += +d;
        }
        if (sum % 2 === 0) count++;
    }
    
    return count;
};