/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let num = 0;
    let map = new Map();
    
    //Check rows
    for (let r=0; r<grid.length; r++) {
        let row = [];
        for (let c=0; c<grid[0].length; c++) {
            row.push(grid[r][c]);
        }
        if (map.get(row+'')) {
            map.set(row+'', map.get(row+'') + 1);
        } else {
            map.set(row+'', 1);
        }
    }
    
    //Check cols
    for (let c=0; c<grid[0].length; c++) {
        let col = [];
        for (let r=0; r<grid.length; r++) {
            col.push(grid[r][c]);
        }
        if (map.has(col+'')) {
            num += map.get(col+'')   
        }
    }
    return num;
};