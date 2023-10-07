/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    /*
        Bottom up dynamic programming approach:
        i = piles @ i, j = piles @ j
        d[i][j] = 2D square matrix of length n (length of piles)
        dp[i][j] represents the amount of stones the first picker 
        can get more than the second picker.
        dp[i][i] is initialized with piles[i], which represents the stones one can get 
        at index i with only one choice
        
    */
    
    const n = piles.length;
    const dp = Array.from(Array(n), () => new Array(n).fill(0));
    
    // Initialize dp array with amount of stones gained if there was one pile present
    for (let i=0; i<n; i++) dp[i][i] = piles[i];
    
    // Fill dp array with the rest of pile combinations
    for (let r=1; r<n; r++) {
        for (let l=0; l<n-r; l++) {
            dp[l][l+r] = Math.max(
                piles[l] - dp[l+1][l+r], 
                piles[l+r] - dp[l][l+r-1],
            );
        }
    }    
    
    return dp[0][n-1] > 0;
};