/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  // Track number of integers, count
  let count = 0;
  
  // Save banned nums less than n into a set
  const bannedSet = new Set();
  for (let b of banned) {
    if (b <= n) bannedSet.add(b);
  }

  // User pointer to track current banned num
  let i = 0;
  
  //Track running sum - tempSum
  let tempSum = 0;
  
  // Iterate from 1 to n, inclusive
  for (let num = 1; num <= n; num++) {
    // Check to see num equals current smallest banned num
    if (!bannedSet.has(num)) {
      // If adding curr num to tempSum <= maxSum, 
      // then add to tempSum & increment count
      if (num + tempSum <= maxSum) {
        tempSum += num;
        count++;
      } else {
        // else break out of loop
        break;
      }
    }
  }
  
  return count;
};