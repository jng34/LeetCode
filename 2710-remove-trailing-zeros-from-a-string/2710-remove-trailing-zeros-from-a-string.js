/**
 * @param {string} num
 * @return {string}
 */



var removeTrailingZeros = function(num) {  
  // Iterate from the end of num to front, 
  // where num[idx] != '0';
  // return num.substring(0, idx+1);
  
  let i = num.length - 1;
  
  while (num[i] === '0') {
    i--;
  }
  
  return num.substring(0, i+1);
};