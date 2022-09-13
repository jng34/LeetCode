/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
  //base case
   if (n === 0) return 1;
    
   //if n is negative
   if (n < 0) return myPow(1/x, n*-1);
    
   //if n is even
   if (n % 2 == 0) return myPow(x*x, n/2);
    
   //if n is odd
   return myPow(x*x, (n-1)/2)*x
};

//time: O(n) -> n recursive calls
//space: O(n) -> n call stacks

