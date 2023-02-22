/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
 
  function isPossible(capacity) { 
    let currentLoad = 0;
    let daysNeeded = 1;
    
    for (let weight of weights) {
      currentLoad += weight;
      if (currentLoad > capacity) {
        daysNeeded++;
        currentLoad = weight;
      } 
    }
    return daysNeeded <= days;
  }
  
  const totalLoad = weights.reduce((a,b) => a+b, 0);
  let l = Math.max(...weights);
  let r = totalLoad;  
  
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    const feasible = isPossible(mid);
    if (feasible) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  
  return l;
};