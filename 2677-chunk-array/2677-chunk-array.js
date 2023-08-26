/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i+size))
    i = i + size;
  }
  return res;
};
