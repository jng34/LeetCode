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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let numSet = new Set()
  let stack = [root]
  while (stack.length > 0) {
    const curr = stack.pop()
    numSet.add(curr.val)
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
  }
  let nums = [...numSet].sort((a,b) => a-b)
  return nums[k-1]
};