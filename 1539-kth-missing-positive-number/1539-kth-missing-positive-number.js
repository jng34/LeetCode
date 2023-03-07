/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  /*
    Save arr to a set and then iterate from 1 to k,
    checking to see the missing kth positive number
  */
  
  // arr [2,3,4,7,11]
  // count = 9
  // i = 5
  
  const nums = new Set(arr);
  let i = 0, count = 1;
  while (i < k) {
    if (!nums.has(count)) i++;
    if (i === k) {
      return count;
    } else {
      count++;
    }
  }
  

  
};