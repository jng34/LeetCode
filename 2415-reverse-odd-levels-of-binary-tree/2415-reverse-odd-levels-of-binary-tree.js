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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  dfs(root.left, root.right, 1);
  return root;
  
  function dfs(leftChild, rightChild, level) {
    // base case 
    if (!leftChild || !rightChild) return;
    
    // Swap values of leftChild's left child with rightChild's right child if it is an odd level
    if (level % 2 === 1) {
      [leftChild.val, rightChild.val] = [rightChild.val, leftChild.val];
    }
    
    dfs(leftChild.left, rightChild.right, level + 1);
    dfs(leftChild.right, rightChild.left, level + 1);
  }
};