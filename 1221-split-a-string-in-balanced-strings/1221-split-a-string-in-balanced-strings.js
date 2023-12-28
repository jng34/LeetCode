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
  let strings = 0; // track num of balanced strings
  let lCount = 0; // track L count
  
  for (let i=0; i<s.length; i++) {
    // increment by 1 for L and decrement by 1 if R
    lCount += s[i] === 'L' ? 1 : -1;  
    if (lCount === 0) strings++;
  }
  
  return strings;
};