/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  // tabulation method
  const n = s.length;
  let aCount = new Array(n);
  let bCount = new Array(n);
  
  let b = 0;
  // count all b's left of current idx
  for (let i = 0; i < n; i++) {
    bCount[i] = b;
    if (s[i] === 'b') b++;
  }
  
  let a = 0;
  // count all a's right of current idx
  for (let i = n - 1; i >= 0; i--) {
    aCount[i] = a;
    if (s[i] === 'a') a++;
  }
  
  let ans = Infinity;
  // sum up all deletions at each idx
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, aCount[i] + bCount[i]);
  }
  
  return ans;
};