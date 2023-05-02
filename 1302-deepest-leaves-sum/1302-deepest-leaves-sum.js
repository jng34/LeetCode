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
var deepestLeavesSum = function(root) {
  // Find the height of the root for deepest leaves
  function findHeight(node) {
    if (!node) return -1;
    return 1 + Math.max(findHeight(node.left), findHeight(node.right))
  }
  
  function sumDeepestLeaves(node, height) {
    if (!node) return 0;
    if (height === 0) {
      return node.val;
    } 
    const leftLeaf = sumDeepestLeaves(node.left, height-1)
    const rightLeaf = sumDeepestLeaves(node.right, height-1)
    return leftLeaf + rightLeaf
  }
  
  const maxHeight = findHeight(root);
  return sumDeepestLeaves(root, maxHeight);
};