/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  const n = s.length;
  let freq = 0;
  
  // count freq of letter
  for (let i = 0; i < n; i++) {
    if (s[i] === letter) freq++;
  }
  
  // convert fraction to percentage
  const pct = freq / n * 100;
  
  // round to nearest
  return Math.floor(pct);
};