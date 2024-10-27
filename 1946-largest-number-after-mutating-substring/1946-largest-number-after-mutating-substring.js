/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(num, change) {
  // find all substrings of nums
  // for each substring, perform a mutation
  // convert each substring to a number
  // update max number and return it
  
  let mutatedNums = num.split('');
  // Track changed nums
  
  let mutated = false;
  
  for (let i = 0; i < mutatedNums.length; i++) {
    const n = mutatedNums[i];
    if (change[n] > Number(n)) { 
      mutatedNums[i] = String(change[n]);
      mutated = true; 
    } else if (mutated && change[n] === Number(n)) {
      continue;
    } else {
      if (mutated) break;
    }
  }
  
  return mutatedNums.join('');
};