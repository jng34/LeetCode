/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {  
  let result = "";
  let resLength = 0;
  
  for (let i = 0; i < s.length; i++) {

    // Check for odd-length 
    let start = i, end = i;
    while (s[start] === s[end] && start >= 0 && end < s.length) {
      if (end - start + 1 > resLength) {
        result = s.substring(start, end + 1);
        resLength = end - start + 1;
      }
      start--;
      end++;
    }
    
    // Check for even-length
    start = i, end = i + 1;
    while (s[start] === s[end] && start >= 0 && end < s.length) {
      if (end - start + 1 > resLength) {
        result = s.substring(start, end + 1);
        resLength = end - start + 1;
      }
      start--;
      end++;
    }
  }
 
  return result;
};

