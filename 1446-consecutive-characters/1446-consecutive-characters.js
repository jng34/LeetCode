/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    
    // Iterate through string 
    // If each subsequent character is the same as before, add count
    let power = 1;
    let length = 1;
    for (let i=0; i < s.length; i++) {
      if (s[i] === s[i+1]) {
        length++;
        power = Math.max(length, power);
      } else {
        length = 1;
      }
    }
    
    return power;
};