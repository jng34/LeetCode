/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  // seven months with 31 days:
  // Jan, Mar, May, Jul, Aug, Oct, Dec
  // four months with 30 days:
  // Apr, Jun, Sep, Nov
  // one month with 28 or 29 days: Feb
  
  const year = Number(date.substring(0,4));
  const month = Number(date.substring(5,7));
  const day = Number(date.substring(8));
  
    // calculate if it's a leap year
  // Leap year rules
  // 1. year must be divisible by 4
  // 2. if year is also divisible by 100, then it is not a leap year unless
  // 3. year is also divisible by 400. Then it is a leap year
  
  let leap = false;
  
  
  if (year % 4 === 0) {
    leap = true;
    if (year % 100 === 0 && year % 400 === 0) {
      leap = true;
    } else if (year % 100 === 0 && year % 400 !== 0) {
      leap = false;
    }
  }
  
  const calendar = {
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  };
  
  if (leap) calendar['2'] = 29;

  let ans = 0;
  for (let m = 1; m < month; m++) {
    ans += calendar[m];
  }
  
  ans += day;
    
  return ans;
};