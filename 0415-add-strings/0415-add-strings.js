/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const arr1 = num1.split('').reverse();
  const arr2 = num2.split('').reverse();
  
  let result = [];
  let i = 0, rem = 0, sum;
  
  while (i < arr1.length || i < arr2.length) {
    if (arr1[i] && arr2[i]) {
      sum = Number(arr1[i]) + Number(arr2[i]) + rem;
    } else if (arr1[i]) {
      sum = Number(arr1[i]) + rem;
    } else {
      sum = Number(arr2[i]) + rem;
    }
    
    if (sum > 9) {
      result.push(sum % 10);
      rem = 1;
    } else {
      result.push(sum);
      rem = 0;
    }
    i++;
  }
  
  if (rem === 1) result.push(1);
  
  return String(result.reverse().join(''));
};