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

//create zig zag pattern by using a pointer i:
// if i is even, L -> R
// if i is odd, R -> L
var zigzagLevelOrder = function(root) {
    if (root === null) return [];
        // stack1 for all odd levels
    let stack1 = [root];
        // stack2 for all even levels
    let stack2 = [];
    let level = [];
    let ans = [];
    
    while (stack1.length !== 0 || stack2.length !== 0) {
        while (stack1.length !== 0) {
            let curr = stack1.pop();
            level.push(curr.val);
            if (curr.left !== null) stack2.push(curr.left);
            if (curr.right !== null) stack2.push(curr.right);
        }
        ans.push(level);
        level = [];
        while (stack2.length !== 0) {
            let curr = stack2.pop();
            level.push(curr.val);
            if (curr.right !== null) stack1.push(curr.right);
            if (curr.left !== null) stack1.push(curr.left);
        }
        if (level.length !== 0) {
            ans.push(level);
            level = [];
        }    
    }
    
    return ans;
};