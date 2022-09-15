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
    //brute force - depth search to get all node vals
    let stack = [ root ];
    let vals = [];
    
    //save vals to array
    while (stack.length != 0) {
        const curr = stack.pop();
        vals.push(curr.val);
        if (curr.left || curr.left == 0) stack.push(curr.left);
        if (curr.right || curr.left == 0) stack.push(curr.right);
    }
    
    //similar to twoSum ---> twoDiff
    //iterate with for loops to find min diff
    let minVal = Infinity;
    for (let i=0; i<vals.length-1; i++) {
        for (let j=i+1; j<vals.length; j++) {
            minVal = Math.min( minVal, Math.abs(vals[i] - vals[j]) )
        }
    }
    
    return minVal;
   
};