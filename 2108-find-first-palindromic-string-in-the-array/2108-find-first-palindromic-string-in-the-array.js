/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  // Iterate through string and check if word is a palindrome
  for (let word of words) {
    if (isPalindrome(word)) return word;
  }
  return "";
  
  
  // Helper function to check if word is a palindrome
  function isPalindrome(word) {
    let l = 0, r = word.length - 1;
    while (l < r) {
      if (word[l] !== word[r]) return false;
      l++;
      r--;
    }
    return true;
  }
};