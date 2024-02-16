/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  // Count the freq of elems
  const freq = {};
  arr.forEach((n) => (freq[n] = (freq[n] || 0) + 1));

  // Sort elems based on their freq, in descending order
  const entries = Object.entries(freq); // 2D array - array of key-val pairs
  entries.sort((a, b) => a[1] - b[1]);

  // Iterate through entries and decrement (remove) k numbers
  for (let entry of entries) {
    const num = entry[0];
    while (k > 0 && freq[num] > 0) {
      freq[num]--;
      k--;
    }
  }

  let count = 0;
  
  // Iterate through freq to count nums with freq > 0
  for (let n in freq) {
    if (freq[n] > 0) count++;
  }

  return count;
};