/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  // Linear time O(n)
  // iterate from 1 up to num, and find all divisors
  // track sum of divisors and return sum === num
  
  let sum = 0;
  
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  
  return sum === num;
};