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
var postorderTraversal = function(root) {
  const values = [];
  postOrder(root, values);
  return values;
};

function postOrder(root, values) {
  if (!root) return;
  postOrder(root.left, values);
  postOrder(root.right, values);
  values.push(root.val);
}