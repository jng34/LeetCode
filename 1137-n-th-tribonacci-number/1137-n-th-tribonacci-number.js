/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  // Bottom Up Approach - tabulation method
  const seq = new Array(n + 1).fill(0);
  seq[0] = 0;
  seq[1] = 1;
  seq[2] = 1;
  
  for (let i = 3; i < seq.length; i++) {
    seq[i] += seq[i-3] + seq[i-2] + seq[i-1];
  }
  
  console.log(seq)
  return seq[n];
};