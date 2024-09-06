/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {

    // Find sum of m rolls
    const mSum = rolls.reduce((a,b) => a + b, 0);
    
    // Find sum of n rolls by subtracting total sum - mean * (m + n) by mSum
    const totalSum = mean * (rolls.length + n);
    const nSum = totalSum - mSum;
    
    // If nSum > product of n and 6, return empty array 
    if (nSum < n || nSum > n * 6) return [];
    
    // Generate array of n rolls by dividing nSum by n (and including remainder if necessary)
    const quot = Math.floor(nSum / n);
    const rem = nSum % n;
    let nArray = new Array(n).fill(quot);
    
    // Calculate quot and rem. If rem > 0, then run a loop from 0 to rem, and add 1 to each element in nArray
    if (rem !== 0) {
      for (let i = 0; i < rem; i++) {
          nArray[i]++;
      }  
    } 
 
    return nArray;
};

