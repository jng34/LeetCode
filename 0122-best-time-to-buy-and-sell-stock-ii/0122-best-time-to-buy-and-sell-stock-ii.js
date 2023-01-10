/**
 * @param {number[]} prices
 * @return {number}
 */


/*
    [7,1,5,3,6,4]
     i
       l
     h
*/
var maxProfit = function(prices) {
    let profit = 0, lowest = prices[0];
    for (let i = 1; i < prices.length; i++) {
        lowest = Math.min(lowest, prices[i]);
        if (prices[i] - lowest > 0) {
            profit += prices[i] - lowest;
            lowest = prices[i];
        }
    }
    return profit;
};


