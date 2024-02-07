/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  const n = words.length;
  let pairs = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const word1 = words[i];
      const word2 = words[j];
      if (checkWords(word1, word2)) pairs++;
    }
  }
  return pairs;

  // function to check if sets have same elements
  function checkWords(word1, word2) {
    const set1 = new Set([...word1]);
    const set2 = new Set([...word2]);
    const check1 = [...set1].every((ch) => set2.has(ch));
    const check2 = [...set2].every((ch) => set1.has(ch));
    return check1 && check2;
  }
};