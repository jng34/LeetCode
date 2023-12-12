/**
 * @param {number} n
 * @return {number}
 */

// Iterate from 1 to n to sum up savings
// Store Monday amount in variable
// Set curr amount to 1
// Increment by 1 and add to total
// If n is a multiple of 7:
//   increment Monday amount by 1
//   set curr = monday amount

var totalMoney = function(n) {
  let monday = 1;
  let curr = monday;
  let total = 0;
  
  for (let i=1; i<=n; i++) {
    total += curr++;
    if (i % 7 === 0) {
      monday++;
      curr = monday;
    }
  }
  
  return total;
};