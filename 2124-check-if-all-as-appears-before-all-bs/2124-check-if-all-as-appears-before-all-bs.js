/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  // find first occurrence of b and iterate through rest of s to find any a's
  const idx = s.indexOf('b');
  if (idx === -1) return true;
  
  for (let i = idx + 1; i < s.length; i++) {
    if (s[i] === 'a') return false;
  }
  
  return true;
};