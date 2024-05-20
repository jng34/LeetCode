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
var evaluateTree = function(root) {
  return evalNode(root);
  
  // helper fn to evaluate current node
  function evalNode(node) {
    // if node is a leaf node, return true (1) or false (0)
    if (!node.left && !node.right) {
      return node.val === 1; 
    }
    
    if (node.val === 2) {
      // OR
      return evalNode(node.left) || evalNode(node.right);
    } else {
      // AND
      return evalNode(node.left) && evalNode(node.right);
    }
  }
};
