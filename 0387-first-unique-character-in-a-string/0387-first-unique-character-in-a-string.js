/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  for (let key in freq) {
    if (freq[key] === 1) return s.indexOf(key);
  }
  
  return -1;
};