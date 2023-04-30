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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

  function findDepth(node, val, depth, parent) {
    if (!node) return null;
    if (node.val === val) return [ depth, parent ];  
    const leftSearch = findDepth(node.left, val, depth+1, node.val);
    const rightSearch = findDepth(node.right, val, depth+1, node.val);
    return leftSearch || rightSearch;
  }
  
  const [ xDepth, xParent ] = findDepth(root, x, 0);
  const [ yDepth, yParent ] = findDepth(root, y, 0);
  return xDepth === yDepth && xParent !== yParent;
};
