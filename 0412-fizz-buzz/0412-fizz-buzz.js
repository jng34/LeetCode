/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let strArr = [];  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      strArr.push("Fizz");
    } else if (i % 5 === 0) {
      strArr.push("Buzz");
    } else {
      strArr.push(String(i));
    }
  }
  return strArr;
};