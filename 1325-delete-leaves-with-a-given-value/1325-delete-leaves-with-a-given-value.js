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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  return deleteTargets(root);
  
  // helper function to find and delete target
  function deleteTargets(node) {
    if (!node) return null;
    // Base case: if leaf node equals target, set to null
    if (!node.left && !node.right && node.val === target) return node = null; 
    
    node.left = deleteTargets(node.left);
    node.right = deleteTargets(node.right);
    
    // check again if curr node becomes a leaf node and equals target
    if (!node.left && !node.right && node.val === target) return node = null; 
    return node;
  }
};