/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // levelOrder: traverse all nodes in each level, subsequently
  // use a stack and store [node, level] values
  // while stack is not empty, pop each array and push node val into 
  // the correctly, indexed array in ans
  // Add children from right to left for correct order
  if (!root) return [];
  
  let ans = [];
  let stack = [ [root, 0] ];
  while (stack.length > 0) {
    const [node, lvl] = stack.pop();
    if (ans[lvl]) {
      ans[lvl].push(node.val);
    } else {
      ans[lvl] = [node.val];
    }
    
    const children = node.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      stack.push([child, lvl + 1]);
    }
  }
  
  return ans;
};