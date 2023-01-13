/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let [newIntStart, newIntEnd] = newInterval;
  let leftIntervals = [], rightIntervals = [];
  for (let interval of intervals) {
    const [currStart, currEnd] = interval;
    
    // If current end is greater than newInterval start, add to left intervals
    if (currEnd < newIntStart) {
      leftIntervals.push(interval);
      
    // If newInterval end is less than current start, add to right intervals
    } else if (newIntEnd < currStart) {
      rightIntervals.push(interval);
      
    // If currEnd is greater than or equal to newInterval start, merge the two intervals
    } else {
      newIntStart = Math.min(newIntStart, currStart);
      newIntEnd = Math.max(newIntEnd, currEnd);
    }
  }
  
  return [ ...leftIntervals, [newIntStart, newIntEnd], ...rightIntervals ];
}