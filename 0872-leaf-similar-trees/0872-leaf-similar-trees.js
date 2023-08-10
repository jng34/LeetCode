/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // BFS
    let leafVals1 = [];
    let leafVals2 = [];
    
    function findLeaves(node, vals) {
        if (!node.left && !node.right) {
            vals.push(node.val);
            return;
        }    
        if (node.left) findLeaves(node.left, vals);
        if (node.right) findLeaves(node.right, vals);
    }
    
    findLeaves(root1, leafVals1);
    findLeaves(root2, leafVals2);
    
    while (leafVals1.length || leafVals2.length) {
        const curr1 = leafVals1.pop();
        const curr2 = leafVals2.pop();
        if (curr1 !== curr2) return false;
    }
    
    return true;
};