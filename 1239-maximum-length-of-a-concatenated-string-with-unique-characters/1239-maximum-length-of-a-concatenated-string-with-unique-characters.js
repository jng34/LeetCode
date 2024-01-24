/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const n = arr.length;
  let max = 0;
  findMaxLength('', 0);
  return max;

  // Helper functions
  function findMaxLength(s, idx) {
    if (!isUnique(s)) return;
    max = Math.max(max, s.length);
    for (let i = idx; i < n; i++) {
      findMaxLength(s + arr[i], i + 1);
    }
  };

  function isUnique(str) {
    const seen = new Set();
    for (let ch of str) {
      if (seen.has(ch)) {
        return false;
      } else {
        seen.add(ch);
      }
    }
    return true;
  };

};