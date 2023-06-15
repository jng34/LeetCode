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
var maxLevelSum = function(root) {
    // Keep track of levels and maxSum 
    let sumAndLevel = {};
    // BFS
    let queue = [[root, 1]];
    while (queue.length > 0) {
        const [node, level] = queue.shift();
        if (sumAndLevel[level]) {
            sumAndLevel[level] += node.val;
        } else {
            sumAndLevel[level] = node.val;
        }
        if (node.left) queue.push([ node.left, level+1 ]);
        if (node.right) queue.push([ node.right, level+1 ]);
    }
    
    let maxSum = Math.max(...Object.values(sumAndLevel));
    for (let level in sumAndLevel) {
        if (sumAndLevel[level] === maxSum) return Number(level);
    }
};