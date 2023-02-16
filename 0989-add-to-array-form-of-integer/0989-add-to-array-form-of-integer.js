/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  // Time O(m)  m = longer of num's length or k's length
  // Space O(1)  handful of variables to store data
  
  num.reverse();
  const n = String(k).split('').reverse();
  
  let remainder = 0;
  let i = 0;
  let sum;
  
  while (i < n.length || i < num.length) {
    if (n[i] && num[i]) {
      sum = Number(n[i]) + num[i] + remainder;
    } else if (n[i]) {
      sum = Number(n[i]) + remainder;
    } else {
      sum = num[i] + remainder;
    }
    
    if (sum > 9) {
      num[i] = sum % 10;
      remainder = 1;
    } else {
      num[i] = sum;
      remainder = 0;
    }
    i++;
  }
  
  if (remainder === 1) num.push(1);
  
  return num.reverse();
};