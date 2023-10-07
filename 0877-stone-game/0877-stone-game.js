/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const n = piles.length;
    const memo = {};
    return helper(0, n-1, 1) > 0;
    
    // aliceTurn => Alice: true, Bob: false
    function helper(start, end, aliceTurn) {
        if (start > end) return 0;
        const key = start+','+end;
        if (memo[key]) return memo[key];
        
        if (aliceTurn) {
            memo[key] = Math.max(
                piles[start] + helper(start+1, end, false),
                piles[end] + helper(start, end-1, false)    
            )
        } else {
            memo[key] = Math.min(
                -piles[start] + helper(start+1, end, true),
                -piles[end] + helper(start, end-1, true)    
            )
        }
        
        return memo[key];
    }
    
};