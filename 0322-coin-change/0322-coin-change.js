/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let min = Infinity;
    const memo = {};
    const res = dp(amount, 0);
    return res !== Infinity ? res: -1
    

    function dp(val, i) {
        // base cases
        const key = val + ',' + i;
        if (key in memo) return memo[key];
        if (val === 0) return 0;
        if (val < 0 || i === coins.length) return min;
        
        // subtract from current coin and stay on current coin
        const path1 = 1 + dp(val-coins[i], i);
        
        // subtract from current coin and skip to next coin
        const path2 = 1 + dp(val-coins[i], i+1);
        
        // skip to next coin
        const path3 = dp(val, i+1);
        
        memo[key] = Math.min(min, path1, path2, path3);
        return memo[key];
    }
};