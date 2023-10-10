/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    /*
        Check if main diagonal and anti-diagonal are non-zero
        Check if rest of elements are zero
        return true else false
    */
    
    const n = grid.length;
    
    // Main diagonal & Anti-diagonal check
    for (let i=0; i<n; i++) {
        if (grid[i][i] === 0 || grid[i][n-i-1] === 0) return false;
    }
    
    // Check all other elements in matrix
    for (let r=0; r<n; r++) {
        for (let c=0; c<n; c++) {
            if (r === c || r+c+1 === n) continue;
            if (grid[r][c] !== 0) return false;
        }
    }
    
    return true;
};