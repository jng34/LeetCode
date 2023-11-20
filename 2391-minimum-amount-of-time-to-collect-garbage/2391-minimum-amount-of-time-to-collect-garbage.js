/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  let minutes = 0;
  // Collection times: 
  // Add up all - garbage.length - for each house.
  for (let i=0; i<garbage.length; i++) {
    minutes += garbage[i].length;
  }

  // Travel time:
  // Initialize g, m, p variables at 0 to track highest indices
  let g = -1, m = -1, p = -1;
  let j = garbage.length-1;
  // -Iterate from back of garbage  using while loop i>0
  while (j >= 0) {
    // break when g, m, p indices have been assigned  
    if (g > -1 && m > -1 && p > -1) break;

    // Assign vars to highest indices
    const gb = garbage[j];
    if (g === -1 && gb.indexOf('G') > -1) g = j;
    if (m === -1 && gb.indexOf('M') > -1) m = j;
    if (p === -1 && gb.indexOf('P') > -1) p = j;
  
    j--;
  }
  
  // Compute travel time for each type of truck.
  for (let t=0; t<travel.length; t++) {
    if (g > 0) {
      minutes += travel[t];
      g--;
    }
    if (m > 0) {
      minutes += travel[t];
      m--;
    }
    if (p > 0) {
      minutes += travel[t];
      p--;
    }
  }

  return minutes;
};
                                                                                                                                                                                                                                              