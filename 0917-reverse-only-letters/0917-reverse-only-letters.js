/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let newStr = [];
  const alphaNumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const dict = new Set([...alphaNumeric]);

  // Two pointers
  let i=0, j=s.length-1;

  while (j >= 0) {
    if (dict.has(s[j]) && dict.has(s[i])) {
      newStr[i] = s[j]; 
      i++;
      j--;
    } else if (!dict.has(s[j])) {
      newStr[j] = s[j];
      j--;
    } else if (!dict.has(s[i])) {
      newStr[i] = s[i];
      i++;
    }
  }

  return newStr.join('');
};