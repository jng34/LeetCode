/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  // define alphabet for Morse code
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const dict = {};
  
  for (let i = 0; i < 26; i++) {
    dict[letters[i]] = morse[i];
  }
  
  // use a set to track unique transformations;
  const transformations = new Set();
  
  for (let word of words) {
    let transform = '';
    for (let i = 0; i < word.length; i++) {
      transform += dict[word[i]];
    }
    
    if (!transformations.has(transform)) {
      transformations.add(transform);
    }
  }
  
  return transformations.size;
   
};