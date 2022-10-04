/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    const rowLength = grid.length;
    const colLength = grid[0].length;
    let fresh = 0;
    let minutes = 0;
    
    // Breadth First Search with queue
    const queue = [];
    for (let r = 0; r < rowLength; r++) {
        for (let c = 0; c < colLength; c++) {
            if (grid[r][c] === 1) fresh++;
            if (grid[r][c] === 2) queue.push([r, c]);           
        }
    }
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            
            const [r, c] = queue.shift();
            
            if (r - 1 >= 0 && grid[r - 1][c] === 1) {
                grid[r - 1][c] = 2;
                fresh--;
                queue.push([r - 1, c]);
            }
            if (r + 1 < rowLength && grid[r + 1][c] === 1) {
                grid[r + 1][c] = 2;
                fresh--;
                queue.push([r + 1, c]);
            }
            if (c - 1 >= 0 && grid[r][c - 1] === 1) {
                grid[r][c - 1] = 2;
                fresh--;
                queue.push([r, c - 1]);
            }
            if (c + 1 < colLength && grid[r][c + 1] === 1) {
                grid[r][c + 1] = 2;
                fresh--;
                queue.push([r, c + 1]);
            }
        }
        
        if (queue.length > 0) minutes++;
    }
    
    return fresh === 0 ? minutes : -1;
};

// function orangeRotter(grid, r, c, visited) {
//     const rowCheck = (0 <= r && r < grid.length);
//     const colCheck = (0 <= c && c < grid[0].length);
//     if (!rowCheck || !colCheck) return false;
    
//     if (grid[r][c] === 2) turn false;
    
//     const pos = r + "," + c;
//     if (visited.has(pos)) return false;
//     visited.add(pos);
    
//     if (grid[r][c] === 2) {
//         orangeRotter(grid, r+1, c, visited);
//         orangeRotter(grid, r-1, c, visited);
//         orangeRotter(grid, r, c+1, visited);
//         orangeRotter(grid, r, c-1, visited);
//     }
    

// }