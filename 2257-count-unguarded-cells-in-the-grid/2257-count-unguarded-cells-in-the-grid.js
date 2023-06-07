/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const grid = Array(m).fill().map(() => Array(n).fill(''))
    let guarded = new Set();

    //Mark walls    
    walls.forEach((wall) => grid[wall[0]][wall[1]] = 'W');
    //Mark guards
    guards.forEach((guard) => grid[guard[0]][guard[1]] = 'G');
    
    guards.forEach((guardPos) => {
        const [x,y] = guardPos;
        
        //Check left of guard
        for (let i=y-1; i>=0; i--) {
            if (grid[x][i] ===  'W' || grid[x][i] ===  'G') break;
            if (guarded.has(x+','+i)) continue;
            guarded.add(x+','+i);
        }
        
        //Check right of guard
        for (let i=y+1; i<grid[x].length; i++) {
            if (grid[x][i] ===  'W' || grid[x][i] ===  'G') break;
            if (guarded.has(x+','+i)) continue;
            guarded.add(x+','+i);
        }
        //Check above of guard
        for (let i=x-1; i>=0; i--) {
            if (grid[i][y] ===  'W' || grid[i][y] ===  'G') break;
            if (guarded.has(i+','+y)) continue;
            guarded.add(i+','+y);
        }
        
        //Check below of guard
        for (let i=x+1; i<grid.length; i++) {
            if (grid[i][y] ===  'W' || grid[i][y] ===  'G') break;
            if (guarded.has(i+','+y)) continue;
            guarded.add(i+','+y);
        }
    })
    
    const unGuarded = (m*n)-(guards.length)-(walls.length)-(guarded.size);
    return unGuarded;
};