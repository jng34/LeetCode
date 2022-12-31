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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const levelsArr = [];
    fillLevels(root, levelsArr, 0);
    return levelsArr[levelsArr.length - 1];
};

const fillLevels = (node, arr, level) => {
  if (!node) return;
  if (arr[level] === undefined) arr.push(node.val);
  fillLevels(node.left, arr, level + 1)
  fillLevels(node.right, arr, level + 1)
}