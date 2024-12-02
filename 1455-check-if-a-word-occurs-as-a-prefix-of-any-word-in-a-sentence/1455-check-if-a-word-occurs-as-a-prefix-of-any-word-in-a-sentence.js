/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const sentenceArr = sentence.split(' ');

  // Iterate through each word in sentence
  for (let i = 0; i < sentenceArr.length; i++) {
    // Check if each word "startsWith" searchWord
    const word = sentenceArr[i];
    
    // Return index (1-indexed) of word
    if (word.startsWith(searchWord)) return i + 1;
  }
  
  return -1;
};