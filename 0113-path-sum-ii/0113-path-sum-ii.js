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
    return findPath(root, targetSum, [], []);
};

function findPath(root, sum, solution, result) {
    if (!root) return result;
    
    solution.push(root.val);
    if (!root.left && !root.right && root.val == sum) {
        result.push(solution.slice());
    }
    
    findPath(root.left, sum - root.val, solution, result);
    findPath(root.right, sum - root.val, solution, result);
    
    solution.pop();
    
    return result;
}