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
 * @param {number} targetSum
 * @return {boolean}
 */

//memoization/dyprog prob
var hasPathSum = function(root, targetSum) {
  let currSum = 0
  
  //Helper Function
  function _hasPathSum(node, sum) {
    if (!node) return false;
    sum += node.val;
    if (!node.left && !node.right) {
      return sum === targetSum
    }
    return _hasPathSum(node.left, sum) || _hasPathSum(node.right, sum);
  }
  
  return _hasPathSum(root, currSum); 
};