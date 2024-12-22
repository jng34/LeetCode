/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  const n = prices.length;
  const answer = [];
  
  // For each item in prices,
  // iterate through rest of the items to find prices[j] <= prices[i]
  // Update discounted price for item in answer
  
  for (let i = 0; i < n; i++) {
    let discount = prices[i];
    for (let j = i + 1; j < n; j++) {
      if (prices[j] <= prices[i]) {
        discount -= prices[j];
        break;
      }
    }
    answer[i] = discount;
  }
  
  return answer;
};