/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    const mod = 10**9 + 7
    
    for (let end = 1; end < dp.length; end++) {
        if (end >= zero) {
            dp[end] += dp[end - zero];
        }
        if (end >= one) {
            dp[end] += dp[end - one];
        }
        dp[end] %= mod;
    }
    
    let count = 0;
    for (let i = low; i <= high; i++) {
        count += dp[i];
    }
    
    return count % mod;
};