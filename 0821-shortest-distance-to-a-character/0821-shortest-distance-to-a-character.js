/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  // Create array answer of length s.length
  let answer = []

  // Track index of occurrence
  let prev = Infinity;
  
  // First pass to find diff from left to right
  for (let i=0; i<s.length; i++) {
    if (s[i] === c) prev = i;
    answer[i] = Math.abs(prev - i);
  }

  prev = Infinity;

  // Second pass to find diff from right to left
  for (let i=s.length-1; i>=0; i--) {
    if (s[i] === c) prev = i;
    answer[i] = Math.min(answer[i], prev - i);
  }
  
  return answer;
};