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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const uniVal = root.val;
  
  function checkAllNodes(node, uniVal) {
    if (!node) return true;
    if (node.val !== uniVal) return false;
    return checkAllNodes(node.left, uniVal) && checkAllNodes(node.right, uniVal);
  }
  
  return checkAllNodes(root, uniVal);
};