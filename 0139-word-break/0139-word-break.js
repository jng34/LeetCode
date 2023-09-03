/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    return dp(s, {});
    
    // dp helper function
    function dp(str, memo) {
        // base case should return boolean
        if (str === "") return true;
        if (str in memo) return memo[str];
        
        for (let word of wordDict) {
            if (str.startsWith(word)) {
                if (dp(str.slice(word.length), memo)) {
                    memo[str] = true;
                    return true;
                }
            }
        }
    
        memo[str] = false;
        return false;
    }
};