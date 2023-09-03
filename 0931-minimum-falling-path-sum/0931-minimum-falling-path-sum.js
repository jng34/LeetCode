/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const memo = {};
    let minSum = Infinity;
    for (let c = 0; c < col; c++){
        minSum = Math.min(minSum, dp(0, c));
    }
    return minSum;
    
    
    function dp(r, c) {
        // base cases
        const key = r + ',' + c;
        const elem = matrix[r][c];
        if (c < 0 || c === col) return Infinity;
        if (r === row - 1) return elem;
        if (key in memo) return memo[key];
        
        const path1 = dp(r + 1, c);
        const path2 = dp(r + 1, c - 1);
        const path3 = dp(r + 1, c + 1);
        
        memo[key] = elem + Math.min(path1, path2, path3);
        return memo[key];
    }
};