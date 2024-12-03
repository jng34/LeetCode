/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  // Add spaces according to indices in spaces and return modified string
  // Create an array of characters for s
  // Use two pointers to add to track char in s and space in spaces
  // If current char coincides with curr space index, insert space and then char into strArr
  
  let strArr = [];
  let i = 0, j = 0;
  
  while (i < s.length) {
    const ch = s[i];
    if (i === spaces[j]) {
      strArr.push(' ', ch);
      j++;
    } else {
      strArr.push(ch);
    }
    i++;
  }
  
  return strArr.join('');
};