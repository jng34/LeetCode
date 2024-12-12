/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for (let i = 0; i < k; i++) {
        gifts.sort((a,b) => b-a);
        const currMax = gifts[0];
        const giftsRem = Math.floor(Math.sqrt(currMax));
        gifts[0] = giftsRem;
    }
    return gifts.reduce((a,b) => a + b, 0);
};