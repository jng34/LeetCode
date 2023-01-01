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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    function findPath(node) {
        if (!node) return [];
        if (!node.left && !node.right) return [[node.val]];
        
        let allPaths = [];
        let leftPaths = findPath(node.left);
        for (let path of leftPaths) {
            allPaths.push([ node.val, ...path ]);
        }
        
        let rightPaths = findPath(node.right);
        for (let path of rightPaths) {
            allPaths.push([ node.val, ...path ]);
        }
        
        return allPaths;
    }
    
    const allPaths = findPath(root);
    return allPaths.filter((subPath) => subPath.reduce((a,b) => a+b, 0) === targetSum)
   
};






