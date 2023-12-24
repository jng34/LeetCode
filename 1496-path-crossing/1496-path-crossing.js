/**
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function(path) {
    // Create starting point x=0, y=0
    let x = 0, y = 0;       
    
    // Create a visited set and mark starting point "0,0" seen
    const visited = new Set([x+','+y]);

    // Iterate through path
    for (let i=0; i<path.length; i++) {
        
        const dir = path[i];
        // If 'N', y+1
        if (dir === 'N') y++;
        // If 'E', x+1
        if (dir === 'E') x++;
        // If 'S', y-1
        if (dir === 'S') y--;
        // If 'W', x-1
        if (dir === 'W') x--;
        
        const position = x+','+y;
        
        // If set has new position, return false
        if (visited.has(position)) return true;
        
        // Else add new position 'x,y' to set
        visited.add(position);
    }
    
    return false;
}