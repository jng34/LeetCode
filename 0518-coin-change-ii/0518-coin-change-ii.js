/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let memo = {};
    return dp(amount, 0);
    
    function dp(val, i) {
        const key = val + ',' + i;
        if (key in memo) return memo[key];
        if (val === 0) return 1;
        if (i === coins.length) return 0;
        
        if (coins[i] > val) {
            memo[key] = dp(val, i + 1);
        } else {
            memo[key] = dp(val - coins[i], i) + dp(val, i + 1)
        }
        
        return memo[key];
    }
}; 