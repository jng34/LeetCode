/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */


/*
  Pseudocode:
  // Count freq of all letters in strings s and t.
  // Min number of steps = (length of s) - (all t chars contained in s)
  // Keep count of characters in t that are in s.
  // return min number of steps
  
  e.g. s = 'bc'   t = 'ab'
*/
var minSteps = function(s, t) {
  // Count freq of all letters in strings s and t.
  const sFreq = {}, tFreq = {};
  // s and t have same length
  for (let i=0; i<s.length; i++) {
    const sChar = s[i], tChar = t[i];
    sFreq[sChar] = (sFreq[sChar] || 0) + 1;
    tFreq[tChar] = (tFreq[tChar] || 0) + 1;
  }
  
  let count = 0;
  for (let ch in tFreq) {
    if (ch in sFreq) {
      if (sFreq[ch] < tFreq[ch]) count += tFreq[ch] - sFreq[ch];
    } else {
      count += tFreq[ch];
    }
  }
  
  return count;
};