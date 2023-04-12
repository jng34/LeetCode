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
var getMinimumDifference = function(root) {
    const nodeValues = getNodeValues(root, []);
    let minDiff = Infinity;
    for (let i=1; i<nodeValues.length; i++) {
        minDiff = Math.min(minDiff, nodeValues[i]-nodeValues[i-1]);
    }
    return minDiff;
};

function getNodeValues(root, values) {
    if (!root) return values;
    
    getNodeValues(root.left, values);
    values.push(root.val);
    getNodeValues(root.right, values);
    
    return values;
}