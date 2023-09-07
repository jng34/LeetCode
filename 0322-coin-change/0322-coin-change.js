/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let dp = new Array(amount + 1).fill(Infinity);
    // 0 num of coins to make 0
    dp[0] = 0;
    
    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    
    return dp[amount] !== Infinity ? dp[amount] : -1;
};