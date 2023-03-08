/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  
  /*
    Logic:
    Perform binary search to find minimum time to complete total trips.
    -> Left (lower bound): 1
    -> Right (upper bound): max bus time * totalTrips
    For each mid value, count the number of trips
    Check if that number >= totalTrips, then update the minTime and decrement right (mid - 1)
    Else increment left (mid + 1)
  */
  
  // Trip Counter function (helper)
  function countTrips(t) {
    let count = 0;
    for (let i = 0; i < time.length; i++) {
      count += Math.floor(t / time[i]);
    }
    return count;
  }
  
  
  // Main code
  let minTime = Infinity;
  const maxTime = Math.max(...time)*totalTrips;  
  
  // Binary search from left = 1 to right = maxTime
  let left = 1, right = maxTime;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const tripCount = countTrips(mid);
    if (tripCount >= totalTrips) {
      minTime = Math.min(minTime, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return minTime;
};

