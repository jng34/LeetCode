/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // Preorder -> Self, Left, Right
  // Inorder -> Left, Self, Right
  // O(n^2) time and space -> due to slicing for each value
  
  // Base case
  if (preorder.length === 0) return null;
  
  const val = preorder[0];
  const root = new TreeNode(val);
  const mid = inorder.indexOf(val);
  
  const leftInOrder = inorder.slice(0, mid);
  const rightInOrder = inorder.slice(mid + 1);
  const leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
  const rightPreOrder = preorder.slice(leftPreOrder.length + 1);
  
  const leftNode = buildTree(leftPreOrder, leftInOrder);
  const rightNode = buildTree(rightPreOrder, rightInOrder);
  root.left = leftNode;
  root.right = rightNode;
  
  return root;
};