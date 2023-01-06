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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;
    let count = 0;
    let queue = [ root ];

    var findPathSums = function(node, currSum) {
      if (!node) return;
      currSum += node.val;
      if (currSum === targetSum) count++;
      findPathSums(node.left, currSum);
      findPathSums(node.right, currSum);
    }
    
    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      findPathSums(curr, 0);
    }
    
    return count;
};


    