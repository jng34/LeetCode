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
var preorderTraversal = function(root) {
  const values = [];
  preOrder(root, values);
  return values;
};

function preOrder(root, values) {
  if (!root) return;
  values.push(root.val);
  preOrder(root.left, values);
  preOrder(root.right, values);
};