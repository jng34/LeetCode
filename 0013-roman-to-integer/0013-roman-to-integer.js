/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  let integer = 0;
  let i = s.length-1;
  
  while (i >= 0) {
    const char = s[i];
    
    if (char === 'V' || char === 'X') {
      if (s[i-1] === 'I') {
        integer += map[char] - 1;
        i -= 2;
        continue;
      }
    }
    
    if (char === 'L' || char === 'C') {
      if (s[i-1] === 'X') {
        integer += map[char] - 10;
        i -= 2;
        continue;
      }
    }
    
    if (char === 'D' || char === 'M') {
      if (s[i-1] === 'C') {
        integer += map[char] - 100;
        i -= 2;
        continue;
      }
    }
    
    integer += map[char];
    i--;
    
  }
  
  return integer;
};

 