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
var countNodes = function(root) {
  
  function countLeft(node) {
    if (!node) return 0;
    return 1 + countLeft(node.left);
  }
  
  function countRight(node) {
    if (!node) return 0;
    return 1 + countRight(node.right);
  }
  
  function countAll(node) {
    const leftCt = countLeft(node);
    const rightCt = countRight(node);
    if (leftCt === rightCt) return 2**leftCt - 1;
    return countAll(node.left) + countAll(node.right) + 1;
  }
  
  return countAll(root);
};

