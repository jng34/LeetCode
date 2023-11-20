/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    /*
      Track number of substrings with var ans.
      Var temp tracks current homogenous substring.
      Iterate through each letter, starting at index 1.
        if s[i] not equal to s[i - 1]:
          set temp to 1 
        else:
          increment temp
        add temp to ans
      return ans;
    */
  
  let ans = 1;
  let temp = 1;
  
  for (let i=1; i<s.length; i++) {
    if (s[i] !== s[i-1]) {
      temp = 1;
    } else {
      temp++;
    }
    ans = (ans + temp) % (10**9 + 7);
  }
  
  return ans;
};