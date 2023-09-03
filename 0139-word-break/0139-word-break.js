/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Tabulation
    const n = s.length;
    const dpTab = new Array(s.length + 1).fill(false);
    dpTab[0] = true;
    
    for (let i=0; i<dpTab.length; i++) {
        if (!dpTab[i]) continue;
        
        for (let word of wordDict) {
            if (s.slice(i, i + word.length) === word) {
                if (i + word.length <= dpTab.length) {
                    dpTab[i + word.length] = true;
                }
            }
        }
    }
    
    return dpTab[s.length]
};