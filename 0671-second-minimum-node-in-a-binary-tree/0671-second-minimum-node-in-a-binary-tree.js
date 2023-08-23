/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let numSet = new Set();  
  let queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.left && curr.right) {
      numSet.add(curr.left.val);
      numSet.add(curr.right.val);
      queue.push(curr.left, curr.right);
    }
  }
  let nums = [...numSet].sort((a,b) => a-b);
  return nums.length > 1 ? nums[1] : -1;
};