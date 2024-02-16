/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  // track total unique elems
  let count = 0;

  // Count the freq of elems
  const freq = {};
  arr.forEach((n) => {
    if (n in freq) {
      freq[n]++;
    } else {
      freq[n] = 1;
      count++;
    }
  });

  // Sort elems based on their freq, in descending order
  const entries = Object.entries(freq); // 2D array - array of key-val pairs
  entries.sort((a, b) => a[1] - b[1]);

  // Iterate through entries and decrement (remove) k numbers
  for (let entry of entries) {
    const num = entry[0];
    if (k > 0 && k >= freq[num]) {
      k -= freq[num];
      count--;
    } else { // k < freq[num]
      break;
    }
  }

  return count;
};