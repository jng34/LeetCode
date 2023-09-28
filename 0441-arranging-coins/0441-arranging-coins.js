/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rows = 0;
    while (rows <= n) {
        n -= rows++;
    }
    return rows-1;
};