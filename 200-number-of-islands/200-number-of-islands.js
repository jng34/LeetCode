/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Use set to check for visited nodes
    const visited = new Set();
    let count = 0;
    
    for (let r = 0; r < grid.length; r++) {
        
        for (let c = 0; c < grid[0].length; c++) {
            
            if (explorer(grid, r, c, visited) === true) {
                count++;
            }
        }
    }
    return count;
};

// Helper function for traversal through grid/graph
var explorer = function(grid, r, c, visited) {
    // Boundary check
    const rowCheck = (0 <= r && r < grid.length);
    const colCheck = (0 <= c && c < grid[0].length);
    if (!rowCheck || !colCheck) return false;
    
    // Water check
    if (grid[r][c] === "0") return false;
    
    // Check for visited nodes
    const pos = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explorer(grid, r-1, c, visited);
    explorer(grid, r+1, c, visited);
    explorer(grid, r, c-1, visited);
    explorer(grid, r, c+1, visited);
    
    return true;
};





