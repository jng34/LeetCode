/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz';
  const alphaSet = new Set();
  for (let char of alphaNum) {
    alphaSet.add(char);
  }
  
  const str = [];
  for (let char of s.toLowerCase()) {
    if (alphaSet.has(char)) str.push(char);
  }
  
  if (str === null) return true;
  let l = 0, r = str.length-1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};