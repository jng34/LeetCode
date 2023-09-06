/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let memo = {};
    return dp(amount, 0);
    
    function dp(val, i) {
        // base cases return boolean
        const key = val + ',' + i;
        if (key in memo) return memo[key];
        if (val === 0) return 1;
        
        const coin = coins[i];
        let count = 0;
        
        for (let qty = 0; qty*coin <= val; qty++) {
            const diff = val -(qty*coin);
            count += dp(diff, i+1);
        }
        
        memo[key] = count;
        return memo[key];
    }
}; 