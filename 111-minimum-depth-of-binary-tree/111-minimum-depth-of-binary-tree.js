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

//    3     
//   / \
// nul 2
//     / \ 
//   null null

/*
The idea is to traverse the given Binary Tree. For every node, check if it is a leaf node. If yes, then return 1. If not leaf node then if the left subtree is NULL, then recur for the right subtree. And if the right subtree is NULL, then recur for the left subtree. If both left and right subtrees are not NULL, then take the minimum of two heights.
*/
var minDepth = function(root) {
    //base case
    if (!root) return 0;
    //check if it's a leaf node - no children
    if (!root.left && !root.right) return 1;
    //if left subtree is Null, then recur right subtree
    if (!root.left) return 1 + minDepth(root.right);
    //if right subtree is Null, then recur left subtree
    if (!root.right) return 1 + minDepth(root.left);

    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};