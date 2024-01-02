/**
 * @param {string} num
 * @return {string}
 */



var removeTrailingZeros = function(num) {
  // Pseudocode:
  // Create an array for num.
  let numArr = Array.from(num);
  
  // Iterate from the end of num to the front.
  // let idx = num.length-1
  let i = numArr.length - 1;
  
  while (numArr[i] === '0') {
    numArr.pop(); // Pop the zero
    i--;
  }
  
  return numArr.join('');
};