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
var sumNumbers = function(root) {
  // DFS + memoization
  return findRootToLeaves(root, "");
  
  // Helper
  function findRootToLeaves(node, numStr) {
    // base cases:
    // 1. If node is null, return 0
    if (!node) return 0;
    
    // 2. Add curr node val and check for leaf node
    numStr += String(node.val);
    if (!node.left && !node.right) return Number(numStr);
    
    const left = findRootToLeaves(node.left, numStr);
    const right = findRootToLeaves(node.right, numStr);
  
    return left + right;
  }
};