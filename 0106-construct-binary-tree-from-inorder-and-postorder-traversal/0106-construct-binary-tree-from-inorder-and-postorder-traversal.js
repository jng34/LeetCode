/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  
  const val = postorder[postorder.length - 1];
  const root = new TreeNode(val);
  const mid = inorder.indexOf(val);
  
  const leftInOrder = inorder.slice(0, mid);
  const rightInOrder = inorder.slice(mid + 1);
  const leftPostOrder = postorder.slice(0, leftInOrder.length);
  const rightPostOrder = postorder.slice(leftInOrder.length, -1);
  
  const leftNode = buildTree(leftInOrder, leftPostOrder);
  const rightNode = buildTree(rightInOrder, rightPostOrder);
  root.left = leftNode;
  root.right = rightNode;
  
  return root;
};