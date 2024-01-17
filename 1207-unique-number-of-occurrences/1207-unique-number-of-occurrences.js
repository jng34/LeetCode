/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // Find freq of each value
  const freq = {};
  arr.forEach(n => freq[n] = (freq[n] || 0) + 1);
  
  // Iterate through each freq and add to a set
  const uniqueFreqs = new Set();
  for (let n in freq) {
    // return false if set already contains freq
    if (uniqueFreqs.has(freq[n])) return false;
    uniqueFreqs.add(freq[n]);
  }

  return true;
};