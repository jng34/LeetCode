/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  // each pass, subtract 1 from each idx in tickets
  // increment time by number of non-zero tickets
  // keep doing this until tickets[k] = 0;
  
  let time = 0;
  let run = true;
  
  while (run) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] > 0) {
        tickets[i]--;
        time++;
      } 
      if (i === k && tickets[k] === 0) {
        run = false;
        break;
      }
      if (tickets[i] === 0) continue;
    }
  }
  
  return time;
};