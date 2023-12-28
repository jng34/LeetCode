/**
 * @param {string} s
 * @return {number}
 */

// Brute force:
// Number of 'L's and 'R's is half of s.length
// Iterate through s.
// Create balance var to track 'L's
// If L count is 0, increment ans by 1.


var balancedStringSplit = function(s) {
  let strings = 0;
  
  let lCount = 0;
  
  for (let i=0; i<s.length; i++) {
    if (s[i] === 'L') {
      lCount++;
    } else {
      lCount--;
    }
    
    if (lCount === 0) strings++;
  }
  
  return strings;
};