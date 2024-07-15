/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  // Hot potato?
  // Scenarios:
  // 1. n < time, 2. n > time, 3. n = time

  /*
    n = 18, time = 17
    result = 18
    n = 18, time = 25
    result = 
    n = 18, time = 38
    resyult = 5
  
  */
  if (n < time) {
    const cycle = Math.floor(time/(n-1));
    const rem = time % (n-1);
    if (cycle % 2 === 0) { // even
      return 1 + rem;
    } else { // odd
      return n - rem;
    } 
    const diff = time - n;
    return n - 1 - diff;
  } else if (n > time) {
    return 1 + time;
  } else {
    return n - 1;
  }
};