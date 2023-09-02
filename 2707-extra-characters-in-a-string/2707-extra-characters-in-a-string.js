/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const dict = new Set(dictionary);
    const n = s.length; 
    return dp(s, 0, {});    
    
    function dp(s, start, memo) {
        // base cases 
        if (start === n) return 0;
        if (start in memo) return memo[start];
        
        // Case 1: count current char as an extra
        let count = dp(s, start + 1, memo) + 1;
        
        // Case 2: iterate through rest of indices until end of str to check for matches
        for (let i = start; i < n; i++) {
            if (dict.has(s.slice(start, i + 1))) {
                count = Math.min(count, dp(s, i + 1, memo));
            }
        }
        
        memo[start] = count;
        return memo[start];
    }
};