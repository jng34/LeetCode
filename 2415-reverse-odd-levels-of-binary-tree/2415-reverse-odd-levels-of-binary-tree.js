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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  // Traverse through binary tree
  let queue = [ root ]; 
  let level = 0;
  
  while (queue.length > 0) {
    const n = queue.length;
    // Store current list of nodes
    const listOfNodes = [];
    
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      listOfNodes.push(node);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    console.log(listOfNodes)
    if (level % 2 === 1) {
      // Reverse the node values in odd level
      let l = 0, r = listOfNodes.length - 1;
      while (l < r) {
        [listOfNodes[l].val, listOfNodes[r].val] = [listOfNodes[r].val, listOfNodes[l].val]
        l++;
        r--;
      }
    }
    
    // Increment level
    level++;
  }
  
  return root;
};