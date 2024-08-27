/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const uglyNums = new Array(n);
  uglyNums[0] = 1;
  let indexMultOf2 = 0, indexMultOf3 = 0, indexMultOf5 = 0;
  let nextMultOf2 = 2, nextMultOf3 = 3, nextMultOf5 = 5;
  for (let i = 1; i < n; i++) {
    const nextUgly = Math.min(nextMultOf2, nextMultOf3, nextMultOf5);
    uglyNums[i] = nextUgly;
    
    if (nextUgly === nextMultOf2) {
      indexMultOf2++;
      nextMultOf2 = uglyNums[indexMultOf2]*2;
    }
    
    if (nextUgly === nextMultOf3) {
      indexMultOf3++;
      nextMultOf3 = uglyNums[indexMultOf3]*3;
    }
    
    if (nextUgly === nextMultOf5) {
      indexMultOf5++;
      nextMultOf5 = uglyNums[indexMultOf5]*5;
    }
  }
  
  return uglyNums[n - 1];
};