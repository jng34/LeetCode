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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Traverse through binary search tree.
// if node val is in btwn range of low & high, add to sum
// return sum
var rangeSumBST = function(root, low, high) {
  let sum = 0;  
  // Depth First Search
  let stack = [root];
  while (stack.length > 0) {
    // remove node from top of stack.
    const curr = stack.pop();
    // add to sum if val is within range.
    if (curr.val >= low && curr.val <= high) sum += curr.val;
    
    // if right and left nodes exist, add them to stack.
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return sum;
};