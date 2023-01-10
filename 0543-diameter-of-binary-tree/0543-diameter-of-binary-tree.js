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

//Time O(n) n = nodes
//Space O(1) 
var diameterOfBinaryTree = function(root) {
  let max = 0;
  
  var findDiameter = function(node) {
    if (!node) return 0;
    const left = findDiameter(node.left);
    const right = findDiameter(node.right);
    max = Math.max(max, left + right)
    return 1 + Math.max(left, right);
  }
  
  findDiameter(root);
  return max;
};
