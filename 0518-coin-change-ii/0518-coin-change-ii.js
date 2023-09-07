/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const n = coins.length;
    let dp = new Array(amount+1).fill(0);
    // 0 ways to make 0 amount
    dp[0] = 1;
    
    // coins = [1,2], amt = 5
    // 1: [1]
    // 2: [1,1], [2]
    // 3: [1,1,1], [2,1]
    // 4: [1,1,1,1], [1,1,2], [2,2]
    // 5
    // [0, 1, 2, 2, 3, 3]
    
    //
    for (let coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }
        
    return dp[amount];
}; 