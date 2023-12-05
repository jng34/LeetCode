/**
 * @param {string} num
 * @return {string}
 */

var largestGoodInteger = function(num) {
  let goodStr = '';
  
  for (let i=0; i<=num.length-3; i++) {
    if (num[i] === num[i+1] && num[i+1] === num[i+2]) {
      let tempStr = num.slice(i,i+3);
      if (tempStr > goodStr) goodStr = tempStr;
    }
  }

  return goodStr;    
};