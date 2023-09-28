/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rows = 0;
    let rem = n;
    for (let i=0; i<n; i++) {
        rem -= i+1;
        if (rem < 0) {
            break;
        } else {
            rows++;
        }
    }    
    return rows;
};