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
var averageOfSubtree = function(root) {
    /*
        All leaf nodes count equal the average val of its subtree.
        Use recursion to compare the node val and average val for each node.
        Sum up all the node vals from left and right part of subtree (including curr node val)
        Create a helper function that takes in node param and returns [sum of node vals, number of nodes]
            base case: if node = null, then return [0,0]. 
            recursively call helper on node.right & node.left
            if sum/n == node val, then increment count.
            return [sum, n]                          
        Call helper function.
        Return count.
    */
    
    let count = 0;
    helper(root);
    return count;
    
    
    function helper(node) {
        if (!node) return [0, 0]; // return sum of node vals and num of nodes
        const right = helper(node.right); 
        const left = helper(node.left); 
        const sum = node.val + right[0] + left[0];
        const n = 1 + right[1] + left[1];
        if (Math.floor(sum/n) === node.val) count++;
        return [sum, n];
    }
};