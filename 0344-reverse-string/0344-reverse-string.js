/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    let front = s[i];
    s[i] = s[j];
    s[j] = front;
    i++;
    j--;
  }
};