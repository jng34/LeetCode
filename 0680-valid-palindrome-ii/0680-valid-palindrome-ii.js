/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  /*
    The idea is to check the string with two pointers, l and r.
    We initiate a variable skip to true to allow for at most one skip (deletion if you will).
    
    First check: skip (delete) letter from left index: 
    While looping through the string by incrementing l and decrementing r,
    check for first non matching pair of letters. Store current l index (lSkip) and current r - 1 index (rSkip) to variables to use as starting indices for our second check.
    
    **Note that we store r - 1 instead of r because this effectively skips or deletes the right character from the string when the indices first differ 
    
    Second check: skip (delete) letter from right index: 
    This is the same functionality as checking for a valid palindrome without any stipulations.
  
    Return the result of the First Check or Second Check
  */
  let l = 0;
  let r = s.length-1;
  let skip = true;
  let lSkip, rSkip; // store indices for Second check
  
  // First check: skip left letter once and proceed
  function leftSkipCheck() { 
    while (l < r) {
      if (s[l] === s[r]) {
        l++;
        r--;
      } else {
        if (!skip) return false; // Return false when you can't skip anymore
        lSkip = l;
        rSkip = r-1; //skip one from right for the Second check
        skip = false;
        l++; 
      } 
    }
    return true;
  }
  
  // Second check: skip right letter once and proceed (regular validPalindrome fn)
  function rightSkipCheck() { 
    while (lSkip < rSkip) {
      if (s[lSkip] === s[rSkip]) {
        lSkip++;
        rSkip--;
      } else {
        return false;
      } 
    }
    return true;
  }
    
  leftSkipCheck();
  rightSkipCheck();

  return leftSkipCheck() || rightSkipCheck();
}
