/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  for (let i=2; i<arr.length; i++) {
    const first = arr[i-2]
    const second = arr[i-1];
    const third = arr[i];
    if (first % 2 === 1 && second % 2 === 1 & third % 2 === 1) {
      return true;
    }
  }
  return false;
};