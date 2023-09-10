/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let res = [];
  let chunk = [];
  let count = 0;
  for (let i=0; i<arr.length; i++) {  
    chunk.push(arr[i]);
    count++;
    if (count === size) {
      res.push(chunk);
      count = 0;
      chunk = [];
    }
  }
  if (chunk.length) res.push(chunk);
  return res;
};
