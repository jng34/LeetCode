/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  // use two pointers to compare both sentences
  let q1 = sentence1.split(' ');
  let q2 = sentence2.split(' ');
  const m = q1.length, n = q2.length;
  let l = 0, r1 = m - 1, r2 = n - 1;
  
  if (m > n) return areSentencesSimilar(sentence2, sentence1)
  
  // Compare prefixes in both queues, move l pointer while they are equal
  while (l < m && q1[l] === q2[l]) {
    l++;
  }
  
  // Compare and deque suffixes in both queues, move r1 & r2 while they are equal
  while (r1 >= 0 && q1[r1] === q2[r2]) {
    r1--;
    r2--;
  }
  
  return r1 < l;
};