/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  // use a hashmap 'seen' to track repeating strings
  const seen = new Map();
  
  arr.forEach((s) => {
    if (seen.has(s)) {
      seen.set(s, seen.get(s) + 1);
    } else {
      seen.set(s, 1)
    }
  })

  // use a var to count the number of distinct strings & check against set
  let count = 0;
  
  for (let [key, val] of seen) {
    if (val === 1) count++;
    if (count === k) return key;
  }
  
  return "";
};