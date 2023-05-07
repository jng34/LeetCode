/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = 'aeiou';
  let max = 0;
    // Check for vowels count in first substring of k length
  for (let i=0; i<k; i++) {
    if (vowels.includes(s[i])) max++;
  }
  
  
  // Sliding window to check remaining substrings
  let temp = max;
  for (let i=k; i<s.length; i++) {
    if (vowels.includes(s[i])) temp++;
    if (vowels.includes(s[i-k])) temp--;
    max = Math.max(max, temp);
  }
  
  return max;
};