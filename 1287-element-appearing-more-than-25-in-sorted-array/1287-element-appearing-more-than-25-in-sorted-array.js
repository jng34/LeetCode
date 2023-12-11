/**
 * @param {number[]} arr
 * @return {number}
 */


// find 25% of arr length
// keep count of curr repeating int
// if count > 25%, return integer

var findSpecialInteger = function(arr) {
  // 25% of arr length
  const occurence = arr.length/4;
  let temp = arr[0];
  let count = 1;
  
  for (let i=1; i<arr.length; i++) {
    if (arr[i] === temp) {
      count++;
      if (count > occurence) return temp;
    } else {
      temp = arr[i];
      count = 1;
    }
  }
  
  return temp;
};