/**
 * @param {string} s
 * @return {number}
 */
//Create set of powers of 5 from 0 to 6
const powers = new Set();
for (let i = 0; i <= 6; i++) {
  const n = 5 ** i;
  powers.add(n.toString(2));
}

var minimumBeautifulSubstrings = function (s) {
  return helper(s);

  // Main code base
  // Helper function
  function helper(str) {
      // Base cases: 
      // If s starts with or ends with '0', return -1;
      if (str.startsWith('0') || str.endsWith('0')) return -1;
      // If s is a power of 5, return 1;
      if (powers.has(str)) return 1;

      let minPartitions = Infinity;

      for (let i=str.length-1; i>0; i--) {
        // split into two partitions
        const subStr1 = str.slice(i);
        const subStr2 = str.slice(0,i);

        const part1 = minimumBeautifulSubstrings(subStr1);
        const part2 = minimumBeautifulSubstrings(subStr2);

        // if either partition starts/ends with '0', skip iteration
        if (part1 === -1 || part2 === -1) {
          continue;
        } else {
          minPartitions = Math.min(minPartitions, part1 + part2);
        }

      }

      return minPartitions === Infinity ? -1 : minPartitions;
    }
  };