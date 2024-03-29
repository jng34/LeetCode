/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  // postOrder: left tree -> right tree -> root
  return helper(root);
  
  function helper(node) {
    if (!node) return [];
    let ans = [];
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      ans.push(...helper(child));
    }
    ans.push(node.val);
    return ans;
  }
};