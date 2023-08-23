/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const filteredArr = [];
  for (let i=0; i<arr.length; i++) {
    const res = fn(arr[i], i);
    if (res) filteredArr.push(arr[i]);
  }
  return filteredArr;
};