/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let p = 0;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                p += 4;
                // Check if there are connected grid cells in all 4 directions
                if (r > 0 && grid[r-1][c] === 1) p--;  // up
                if (r < rows - 1 && grid[r+1][c] === 1) p--;  //down
                if (c > 0 && grid[r][c-1] === 1) p--;  // left
                if (c < cols - 1 && grid[r][c+1] === 1) p--;  // right
            }
        }
    }
    
    return p;
};