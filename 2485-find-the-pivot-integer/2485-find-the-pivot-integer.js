/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  // Find total sum to track left and right sums
  let lSum = 0, total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  // lSum increases from summing i from left
  // rSum = total - lSum + current i
  for (let i = 1; i <= n; i++) {
    lSum += i;
    const rSum = total - lSum + i;
    if (lSum === rSum) return i;
  }

  return -1;
}