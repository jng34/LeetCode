/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  // all odd numbers are false
  if (num % 2 === 1) return false;
  
  // Linear time O(n/2), linear space O(n)
  // iterate from 1 up to num / 2, and find all divisors
  // track sum of divisors and return sum === num
  
  let sum = 0;
  
  for (let i = 1; i <= num/2; i++) {
    if (num % i === 0) sum += i;
  }
  
  return sum === num;
};