/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // Base case
  if (intervals.length === 1) return intervals;
  
  // Sort start times
  intervals.sort((a,b) => a[0] - b[0]);
  
  // Declare variables start, end and result
  const result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  
  // Iterate through intervals to merge intervals by reassigning start and end
  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    
    if (end >= currStart) {
      end = Math.max(end, currEnd);
    } else {
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    }
  }
  
  result.push([start, end]);
  
  return result;
};