/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let allIntervals = [...intervals, newInterval];
  allIntervals.sort((a,b) => a[0]-b[0]);
  console.log(allIntervals)
  let result = [];
  let start = allIntervals[0][0];
  let end = allIntervals[0][1];
  
  for (let i = 1; i < allIntervals.length; i++) {
    const [currStart, currEnd] = allIntervals[i];
    if (currStart <= end) {
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