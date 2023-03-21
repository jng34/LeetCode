/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    const startColor = image[sr][sc];
    
    function filler(r, c, visited) {
        // Check if row and col are inbounds
        const rowInbound = r >= 0 && r < image.length;
        const colInbound = c >= 0 && c < image[0].length;
        if (!rowInbound || !colInbound) return;
        
        // Check if row and col has been visited
        const key = r + ',' + c;
        if (visited.has(key)) return; 
        
        // Color the pixel if same as color of starting pixel
        if (image[r][c] === startColor) {
            image[r][c] = color;
        } else {
            return;
        }
        
        // Add row and col to visited
        visited.add(key);
        
        // Color the 4 directions: up, down, left, right
        filler(r - 1, c, visited);
        filler(r + 1, c, visited);
        filler(r, c + 1, visited);
        filler(r, c - 1, visited);
        
        return;
    }
    
    filler(sr, sc, new Set());
    
    return image;
};