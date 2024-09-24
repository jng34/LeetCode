/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
  let longestPrefix = 0;
  
  // Capture all prefixes in arr1 in a hash set
  const prefixes = new Set();
  
  for (let n of arr1) {
    const nStr = String(n);
    
    // use a variable to track all prefixes for each number
    let prefixN = '';
    
    for (let i = 0; i < nStr.length; i++) {
      prefixN += nStr[i];
      
      // Add unique prefix to prefixes set 
      if (!prefixes.has(prefixN)) {
        prefixes.add(prefixN);
      }
    }
  }
  
  for (let m of arr2) {
    const mStr = String(m);
    let prefixM = '';
    for (let j = 0; j < mStr.length; j++) {
      prefixM += mStr[j];
      // if prefixes set has prefixM & prefixM > longestPrefix, then update longestPrefix
      if (prefixes.has(prefixM) && prefixM.length > longestPrefix) {
        longestPrefix = prefixM.length;
      };
    }
  }
  
  return longestPrefix;
};