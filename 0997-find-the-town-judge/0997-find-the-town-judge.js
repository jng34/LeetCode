/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1) return 1;
  // keep track of trusters
  const trusters = {};
  // keep track of trustees
  const trustees = {};

  for (let trustPair of trust) {
    const [a, b] = trustPair; // a = truster, b = trustee
    
    if (a in trusters) {
      trusters[a].push(b);
    } else {
      trusters[a] = [b];
    }

    if (b in trustees) {
      trustees[b].push(a);
    } else {
      trustees[b] = [a];
    }
  }

  const judges = [];
  // find judge, who is not in trusters obj
  for (let i = 1; i <= n; i++) {
    if (!(i in trusters)) {
      judges.push(i);
    }
  }

  // check if every person trusts the judge by checking if 
  for (let i = 0; i < judges.length; i++) {
    const judgeCandidate = judges[i];
    if (trustees[judgeCandidate]?.length === n - 1) return judgeCandidate;
  }

  return -1; 
};
