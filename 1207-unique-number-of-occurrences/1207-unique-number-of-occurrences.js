/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // Find freq of each value
  const freq = {};
  arr.forEach(n => freq[n] = (freq[n] || 0) + 1);

  // Return true if num of freqs equals num of values, else false
  return new Set([...Object.values(freq)]).size === Object.keys(freq).length;
};