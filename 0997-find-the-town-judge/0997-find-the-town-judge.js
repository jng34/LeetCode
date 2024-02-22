/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1) return 1;

  const trusters = new Set();
  const judgeCandidates = [];

  // keep track of number of people who trust the trustees
  const trustees = {};

  for (let trustPair of trust) {
    const [a, b] = trustPair; // a = truster, b = trustee

    // add all trusters
    trusters.add(a);
    
    // count number of people who trust the trustee
    trustees[b] = (trustees[b] || 0) + 1;
  }

  // Criteria 1: find all persons who do not trust others
  for (let i = 1; i <= n; i++) {
    if (!trusters.has(i)) judgeCandidates.push(i);
  }

  // Criteria 2: find the possible judge who everyone else trusts
  for (let i = 0; i < judgeCandidates.length; i++) {
    const judge = judgeCandidates[i];
    if (trustees[judge] === n - 1) return judge;
  }

  return -1;
};