/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let count = 0
  for (let i=0; i<arr.length; i++) {
    const curr = arr[i];
    if (curr % 2 === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count === 3) return true;
  }
  return false;
};