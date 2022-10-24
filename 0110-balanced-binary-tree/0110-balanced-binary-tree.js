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
var isBalanced = function(root) {
    
    if (!root) return true;
    let height = Math.abs(findHeight(root.left) - findHeight(root.right));
    return height <= 1 && isBalanced(root.left) && isBalanced(root.right);
    
    function findHeight(root) {
        if (!root) return 0;
        let leftTreeHeight = findHeight(root.left);
        let rightTreeHeight = findHeight(root.right);
        return 1 + Math.max(leftTreeHeight, rightTreeHeight);
    }
    

};