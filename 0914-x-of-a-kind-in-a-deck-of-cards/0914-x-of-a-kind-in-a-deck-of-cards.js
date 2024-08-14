/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  // count freq of nums in deck
  const freq = {};
  deck.forEach((n) => freq[n] = (freq[n] || 0) + 1);
  
  const freqArr = Object.values(freq);
  let minFreq = Math.min(...freqArr);
  
  if (minFreq === 1) return false;

  let div = minFreq;
  while (div > 1) {
    let partition = true;
    for (let f of freqArr) {
      if (f % div !== 0) partition = false;
    }
    if (partition) {
      return true;
    } else {
      div--;
    }
  }

  return false;
};