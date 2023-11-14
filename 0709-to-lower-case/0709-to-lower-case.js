/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  
  let ans = '';
  
  // Iterate through s and replace every uppercase letter with its lowercase letter.
  for (let i=0; i<s.length; i++) {
    // Check ASCII value of each character.
    const ascii = s.charCodeAt(i);
    
    // If 65 <= value <= 90, then increment by 32, convert back to string and add to ans
    if (ascii >= 65 && ascii <= 90) {

      // Difference of 32 in ASCII value for every uppercase to lowercase letter.
      const newASCII = ascii + 32;
      const lcChar = String.fromCharCode(newASCII);
      ans += lcChar;
        
    } else {

      // ASCII values of lowercase letters and all else
      // Else just add to ans.
      ans += s[i];
    }
  }

  return ans;
};
