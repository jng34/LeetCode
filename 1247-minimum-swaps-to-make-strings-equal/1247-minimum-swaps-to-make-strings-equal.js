/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

/*
  Pseudocode:
  Return 0 if both strings are the same.
  Count freq of letters in both strings.
  If a letter has a freq of 1, 
  Return -1 since we cannot make the two strings equal.
  e.g.
  s1 = 'xxx'
  s2 = 'yyy' 
  swaps = -1
  
  s1 = 'xyyx' 
  s2 = 'xxyy'
  xyyx -> xyy[y] -> x[x]yy
  xxyy -> xxy[x] -> x[x]yy
  
  xyyx ~> yyx -> yy[y] -> [x] y y
  xxyy ~> xyy -> xy[x] ->  x  y[y]
  swaps = 2
  
  s1 = 'yyxx' -> [x][x]xx -> [y][y] x x
  s2 = 'xxyy' -> [y][y]yy ->  y  y [x][x]
*/

var minimumSwap = function(s1, s2) {
  if (s1 === s2) return 0;
  if (s1.length !== s2.length) return -1;
  
  // Count xy and yx pairs from s1-s2, according to indices.
  let xy = 0, yx = 0;
  
  // Ignore index pairs that are the same values, which require no swapping.
  for (let i=0; i<s1.length; i++) {
    const ch1 = s1[i], ch2 = s2[i];
    if (ch1 === 'x' && ch2 === 'y') xy++;
    if (ch1 === 'y' && ch2 === 'x') yx++;
  }

  // Return -1 if there are an odd number of (xy + yx) pairs.
  if ((xy + yx) % 2 === 1) return -1;
  
  let swaps = 0;
  // Two pairs of 'xy' or 'yx' requires 1 swap (example 1)
  swaps += Math.floor(xy/2);
  swaps += Math.floor(yx/2);
  
  // 'xy' and 'yx' situation requires 2 swaps (example 2)
  if (xy % 2 === 1) swaps += 2;
  
  return swaps;
};