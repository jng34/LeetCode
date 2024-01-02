/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

// Iterate through colors
// For each group of consecutive colors:
//   Find sum(cost) - (max(cost) + minCost of Group)
// Return minTime

var minCost = function(colors, neededTime) {
  let minTime = 0;
  let totalCost = 0;
  let maxCost = 0;
  const n = colors.length;
  
  for (let i=0; i<n; i++) {
    if (i > 0 && colors[i] !== colors[i-1]) {
      minTime += totalCost - maxCost;
      totalCost = 0;
      maxCost = 0;
    }
    
    totalCost += neededTime[i];
    maxCost = Math.max(maxCost, neededTime[i]);
  }
  
  minTime += totalCost - maxCost;
  return minTime;
};