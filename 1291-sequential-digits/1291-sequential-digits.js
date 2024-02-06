/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let list = [];
  const num = '123456789';
  const l = String(low).length;
  const h = String(high).length;
  // Generate all sequential numbers with length of l and h
  // Iterate from l to h, inclusive
  for (let len = l; len <= h; len++) {
    for (let i = 0; i < num.length - 1; i++) {
      if (i + len > num.length) continue;
      const n = Number(num.slice(i, i + len));
      if (Number(n) > high) return list;
      if (Number(n) >= low) list.push(n);
    }
  }
  return list;
};