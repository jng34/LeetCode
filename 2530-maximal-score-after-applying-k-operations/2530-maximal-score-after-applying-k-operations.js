/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  const priorityQ = new MaxPriorityQueue();
  for (let n of nums) priorityQ.enqueue(n);
  let score = 0;
  while (k > 0) {
    let maxVal = priorityQ.dequeue().element;
    if (maxVal === 0) break;
    score += maxVal;
    priorityQ.enqueue(Math.ceil(maxVal/3));
    k--;
  }
  return score;
};