/**
 * @param {string} num
 * @return {string}
 */

var largestGoodInteger = function(num) {
  let startIdx = 0;
  let goodStr = '';
  
  // Iterate through num starting at 1
  for (let i=1; i<num.length; i++) {
    // If curr num[i] does not equal num[startIdx]:
    if (num[i] !== num[startIdx]) startIdx = i;

    // If the length is 3, then compare and update substring if > goodStr
    if (i + 1 - startIdx === 3) {
      let tempStr = num.slice(i+1-3, i+1);
      if (tempStr > goodStr) goodStr = tempStr;
    }
  }

  return goodStr;    
};