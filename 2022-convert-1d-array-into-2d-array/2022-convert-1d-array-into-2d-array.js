/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  const len = original.length;
  if (m * n !== len) return [];
  
  const res = [];
  let i = 0;
  let arr = [];
  
  while (i < len) {
    arr.push(original[i]);
    if (arr.length === n) {
      res.push(arr);
      arr = [];
    }
    i++;
  }
  
  return res;
};