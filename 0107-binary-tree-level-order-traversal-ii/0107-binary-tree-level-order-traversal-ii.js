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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    
    let values = [];
    let level = 0;
    traverseLevel(root, level);
    return values.reverse();
    
    function traverseLevel(node, level) {
        if(!node) return;
        if(level >= values.length) {
            values[level] = [];
        }
        values[level].push(node.val);
        level++;
        traverseLevel(node.left, level);
        traverseLevel(node.right, level);
    } 
};