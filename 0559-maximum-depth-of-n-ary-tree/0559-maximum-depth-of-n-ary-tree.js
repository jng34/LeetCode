/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  
  // If root has no children, return 0.
  if (!root) return 0;
  
  // Create a var maxDepth to track depth.
  let maxDepth = 0;
  
  // Initialize stack with [root, 1], where 1 is current depth (d) level.
  let stack = [[root, 1]];
  
  while (stack.length > 0) {
    
    // Pop off top node.
    const curr = stack.pop();
    
    // Define children and depth d.
    let [node, depth] = curr;
    
    if (node.children.length === 0) {
      
      // If node doesn't have any children, update maxDepth.
      maxDepth = Math.max(maxDepth, depth);
    
    } else {
    
      //Else iterate through children and add valid child into stack, increment d by 1
      for (let child of node.children) {
        if (child) stack.push([child, depth+1]);
      }
    }
    
  }
  
  return maxDepth;
};