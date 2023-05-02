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
 * @return {number[]}
 */
var largestValues = function(root) {
  // Base case
  if (!root) return [];
  
  // Breadth First Search - Queue
  // Initialize queue with an array of the root node and row number 0
  let queue = [[root, 0]];
  let output = [];
  
  while (queue.length > 0) {
    const [node, row] = queue.shift();
    if (output[row] === undefined) {
      output[row] = node.val;
    } else {
      output[row] = Math.max(node.val, output[row]);
    }
    if (node.left) queue.push([node.left, row+1])
    if (node.right) queue.push([node.right, row+1])
  }
  
  return output;
};