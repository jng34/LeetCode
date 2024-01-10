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

//DFS to find all leaf nodes
//Save leaf nodes in an array
//Compare the two arrays of both roots
//Iterate through arrays, return true if same, false if not.

var leafSimilar = function(root1, root2) {
  // Main code
  const arr1 = findLeafNodes(root1); 
  const arr2 = findLeafNodes(root2);
  if (arr1.length !== arr2.length) return false;
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
  
  
  // Helper function - DFS 
  function findLeafNodes(root) {
    let arr = [];
    let stack = [root];
    
    while (stack.length > 0) {
      const curr = stack.pop();
      if (!curr.right && !curr.left) arr.push(curr.val);
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
    
    return arr;
  }
};