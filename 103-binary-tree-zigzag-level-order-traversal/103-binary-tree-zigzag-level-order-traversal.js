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
    let stack1 = [root], stack2 = [], level = [], ans = [], reversal = true;
    
    while (stack1.length != 0) {
        
        let curr = stack1.pop();
        level.push(curr.val);
        
        if (reversal) {
            // set up stack for traversing right to left level
            if (curr.left) stack2.push(curr.left);
            if (curr.right) stack2.push(curr.right);
        } else {
            // set up stack for traversing left to right level
            if (curr.right) stack2.push(curr.right);
            if (curr.left) stack2.push(curr.left);
        }
        
        if (stack1.length == 0) {
            ans.push(level);
            level = [];
            reversal = !reversal;
            stack1 = stack2;
            stack2 = [];
        }
        
    }
    return ans;
};