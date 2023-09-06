/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins, i = 0, memo = {}) {
    // base cases return boolean
    const key = amount + ',' + i;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    const coin = coins[i];
    let count = 0;

    for (let qty = 0; qty * coin <= amount; qty++) {
        const diff = amount - (qty * coin);
        count += change(diff, coins, i + 1, memo);
    }

    memo[key] = count;
    return memo[key];
}; 