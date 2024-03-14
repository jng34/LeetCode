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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // return String[]
    let ans = [];
    findRootPath(root, `${root.val}`);
    return ans;

    // helper function DFS
    function findRootPath(node, path) {
      if (!node.left && !node.right) return ans.push(path); 
      if (node.left) findRootPath(node.left, path + '->' + node.left.val);
      if (node.right) findRootPath(node.right, path + '->' + node.right.val);
      return path;
    }
};