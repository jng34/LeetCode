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
var isSymmetric = function(root) {
    
    function mirrorCheck(n1, n2) { 
        if (!n1 && !n2) return true;
        if (!n1 || !n2 || n1.val !== n2.val) return false;
        return mirrorCheck(n1.left, n2.right) && mirrorCheck(n1.right, n2.left)
    }
    
    return mirrorCheck(root.left, root.right);
}