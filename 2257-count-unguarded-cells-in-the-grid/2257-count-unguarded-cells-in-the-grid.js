/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const grid = Array(m).fill().map(() => Array(n).fill(''))
    let unGuarded = 0;
    //Mark walls    
    walls.forEach((wall) => grid[wall[0]][wall[1]] = 'W');
    //Mark guards
    guards.forEach((guard) => grid[guard[0]][guard[1]] = 'G');
    
    for (let [x,y] of guards) {
        
        //Check left of guard
        for (let i=y-1; i>=0; i--) {
            if (grid[x][i] ===  'W' || grid[x][i] ===  'G') break;
            if (grid[x][i] ===  'x') continue;
            grid[x][i] = 'x';
        }
        
        //Check right of guard
        for (let i=y+1; i<grid[x].length; i++) {
            if (grid[x][i] ===  'W' || grid[x][i] ===  'G') break;
            if (grid[x][i] ===  'x') continue;
            grid[x][i] = 'x';
        }
        //Check above of guard
        for (let i=x-1; i>=0; i--) {
            if (grid[i][y] ===  'W' || grid[i][y] ===  'G') break;
            if (grid[i][y] ===  'x') continue;
            grid[i][y] = 'x';
        }
        
        //Check below of guard
        for (let i=x+1; i<grid.length; i++) {
            if (grid[i][y] ===  'W' || grid[i][y] ===  'G') break;
            if (grid[i][y] ===  'x') continue;
            grid[i][y] = 'x';
        }
    }
    
    console.log(grid)
    
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] === '') unGuarded++;
        }
    }
    
    return unGuarded;
};