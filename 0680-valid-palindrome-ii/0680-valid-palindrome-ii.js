/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l = 0;
  let r = s.length-1;
  let skip = true;
  let lSkip = 1, rSkip = 1; // store indices where letters begin to differ
  
  // First check: skip left letter once and proceed
  function leftCheck() { 
    while (l < r) {
      if (s[l] !== s[r]) {
        if (!skip) return false;
        lSkip = l;
        rSkip = r-1;
        skip = false;
        l++; 
        
      } else {
        l++;
        r--;
      } 
    }
    return true;
  }
  // Second check: skip right letter once and proceed
  function rightCheck() { 
    while (lSkip < rSkip) {
      if (s[lSkip] === s[rSkip]) {
        lSkip++;
        rSkip--;
      } else {
        return false
      } 
    }
    return true;
  }
    
  leftCheck();
  rightCheck();

  return leftCheck() || rightCheck();
}
