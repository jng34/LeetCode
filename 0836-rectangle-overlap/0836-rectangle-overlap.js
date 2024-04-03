/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // destructure rec1 and rec2;
  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;
  
  // check if rectangles are lines
  if (x1 === x2 || x3 === x4 || y1 === y2 || y3 === y4) return false;
  
  // check for where rec1 does NOT overlap
  return !(y1 >= y4 || //above
           x1 >= x4 || //right 
           y2 <= y3 || //bottom
           x2 <= x3);  //left
};