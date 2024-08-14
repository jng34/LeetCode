/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let minTime = 0;
  
  // find min time between two points, extrapolate and sum the rest
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    const xDiff = Math.abs(x2 - x1);
    const yDiff = Math.abs(y2 - y1);
    minTime += Math.max(xDiff, yDiff);
  }
  
  return minTime;
};