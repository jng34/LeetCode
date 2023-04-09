/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let negativeNums = 0;
  for (let n of nums) {
    if (n === 0) return 0;
    if (n < 0) negativeNums++;
  }
  return negativeNums % 2 === 0 ? 1 : -1;
};