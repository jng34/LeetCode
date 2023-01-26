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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const values = [];
  inOrderTraversal(root, values);
  return isSorted(values);
};

// Fill values array with root values in in-order traversal: left, self, right
function inOrderTraversal(root, values) {
  if (!root) return;
  inOrderTraversal(root.left, values);
  values.push(root.val);
  inOrderTraversal(root.right, values);
}

// Check if values array is sorted
function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i + 1] <= nums[i]) return false;
  }
  return true;
}