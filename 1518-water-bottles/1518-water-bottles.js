/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  if (numBottles < numExchange) return numBottles;
  
  let total = numBottles;
  let drank = numBottles;
  let exc = numBottles;
  
  while (exc > 0) {
    exc = Math.floor(total/numExchange);
    drank += exc;
    const rem = total % numExchange;
    total = exc + rem;
  }
  
  return drank;
};