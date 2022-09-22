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
var maxDepth = function(root) {
    //base case
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return 1 + maxDepth(root.right);
    if (!root.right) return 1 + maxDepth(root.left);
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};