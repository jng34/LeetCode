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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
    if (!root) return false;
    let nodeVals = [];
    let stack = [ root ];
    
    // Traverse through BST to grab all node values
    while(stack.length > 0) {
        let node = stack.pop();
        nodeVals.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    // Check if any two values add up to target k
    for (let i=0; i<nodeVals.length-1; i++) {
        for (let j=i+1; j<nodeVals.length; j++) {
            if (nodeVals[i] + nodeVals[j] === k) {
                return true;
            }
        }
    }
    
    return false;
};