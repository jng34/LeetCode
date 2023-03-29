/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  
  // Dynamic programming - tabulation
  // Create an array with length of max day + 1 in days
  
  const lastDay = days[days.length-1];
  const dp = new Array(lastDay + 1).fill(0);
  
  
  // Save days in a set for O(1) time look up vs O(n) time looping
  
  const travelDays = new Set(days);
  
  // Iterate through each day and check if day exists in travelDays
  // If not, then set cost of that day equal to previous day
  // else set cost to the min of the costs 
  // from 1, 7, or 30 days (or starting day i.e. i = 0) ago plus its ticket cost   

  for (let i = 1; i < lastDay + 1; i++) {
    if (travelDays.has(i)) {
      dp[i] = Math.min(
        dp[Math.max(0, i - 1)] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      )
    } else {
      dp[i] = dp[i - 1];
    }
  }
    
  return dp[dp.length - 1];
};