/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  /*
    -Iterate through each cell and check to see if it can reach 
    both Pacific & Atlantic Oceans. 
    -If true, add coordinate to result;
    -Memoize each result to avoid 
    recalculations.
  */
  const rows = heights.length;
  const cols = heights[0].length;
  const memo = {};
  const result = [];
  
  const pacific = new Array(rows).fill().map(() => Array(cols).fill(false));
  const atlantic = new Array(rows).fill().map(() => Array(cols).fill(false));

  // check along coastlines
  for (let r = 0; r < rows; r++) {
    checkOcean(r, 0, heights[r][0], pacific);
    checkOcean(r, cols - 1, heights[r][cols - 1], atlantic);
  }
  
  for (let c = 0; c < cols; c++) {
    checkOcean(0, c, heights[0][c], pacific);
    checkOcean(rows - 1, c, heights[rows - 1][c], atlantic);
  }
  
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const h = heights[r][c];
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r,c]);
      }
    }
  }
  return result;
  
  
  // Helper fn
  function checkOcean(r, c, prevHeight, ocean) {
    if (r < 0 || c < 0 || r === rows || c === cols) return;
    const currHeight = heights[r][c];
    if (currHeight < prevHeight) return;
    if (ocean[r][c]) return;
    ocean[r][c] = true;
    
    checkOcean(r + 1, c, currHeight, ocean); // down
    checkOcean(r - 1, c, currHeight, ocean); // up
    checkOcean(r, c + 1, currHeight, ocean); // right
    checkOcean(r, c - 1, currHeight, ocean); // left
  }
};