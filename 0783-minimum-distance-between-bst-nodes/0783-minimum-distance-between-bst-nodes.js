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
var minDiffInBST = function(root) {
    let values = [];
    let stack = [ root ];
    
    while (stack.length > 0) {
        const curr = stack.pop();
        values.push(curr.val);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    
    values.sort((a,b) => b-a);
    let min = Infinity;
    
    for (let i = 0; i < values.length - 1; i++) {
        const diff = values[i] - values[i+1];
        min = Math.min(min, diff);
    }
    console.log(values)
    return min;
};