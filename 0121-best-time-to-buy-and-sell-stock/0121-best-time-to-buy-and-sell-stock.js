/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
    let maxReturn = 0, lowest = prices[0];
    for (let i = 1; i < prices.length ; i++) {
        lowest = Math.min(lowest, prices[i]);
        maxReturn = Math.max(maxReturn, prices[i] - lowest);
    }
    return maxReturn;
};

