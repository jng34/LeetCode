/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // Base case if haystack does not include need, return -1
  if (!haystack.includes(needle)) return -1;
  // Split haystack with needle
  // e.g. haystack = 'dinosaur' and needle = 'saur'
  // 'dinosaur'.split('saur') = ['dino', '']
  // The first occurence of 'saur will be right after the first word 'dino'
  return haystack.split(needle)[0].length;
};