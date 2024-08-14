/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  let days = 0;
  for (let i=0; i<hours.length-1; i++) {
    for (let j=i+1; j<hours.length; j++) {
      const tot = hours[i] + hours[j];
      if (tot % 24 === 0) days++;
    }
  }
  return days;
};