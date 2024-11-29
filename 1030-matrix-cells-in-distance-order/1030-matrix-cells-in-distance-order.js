/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    // Create corresponding coordinates array
    const coordinates = [];
    
    // For each element, find distance of element from center
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            coordinates.push([r, c]);
        }    
    }
    
    // Sort array of coordinates array based off of distances array
    return coordinates.sort((a, b) => {
        // destructure coordinates a and b
        const [r1, c1] = a;
        const [r2, c2] = b;
        
        // compare distances of each coordinate pair
        const d1 = Math.abs(r1 - rCenter) + Math.abs(c1 - cCenter);
        const d2 = Math.abs(r2 - rCenter) + Math.abs(c2 - cCenter);
        
        return d1 - d2;
    })
    
};