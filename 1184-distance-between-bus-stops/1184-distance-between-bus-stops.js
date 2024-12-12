/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) { 
  const n = distance.length;
  
  // Use prefix sum
  const totalDist = distance.reduce((a,b) => a + b, 0);
  
  // Calculate both cw and ccw distances, take min of both
  const sm = start < destination ? start : destination;
  const lg = start > destination ? start : destination;
  
  let ccDist = 0;
  for (let i = sm; i < lg; i++) {
    ccDist += distance[i];
  }
  
  const ccwDist = totalDist - ccDist;
  
  return Math.min(ccDist, ccwDist);
};