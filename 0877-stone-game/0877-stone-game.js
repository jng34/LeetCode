/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const n = piles.length;
    const memo = {};
    return helper(0, n-1) > 0;
    
    function helper(start, end) {
        if (start === end) return piles[start];
        const key = start+','+end;
        if (memo[key]) return memo[key];
        
        const pickStart = piles[start] - helper(start+1, end);
        const pickEnd = piles[end] - helper(start, end-1);
        
        const result = Math.max(pickStart, pickEnd);
        memo[key] = result;
        
        return result;
    }
    
};