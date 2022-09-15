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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let level = [];
  
    while (queue.length > 0) {
        //determine length of queue
        let miniQueue = queue.length;
        let miniLevel = [];
        //loop through to include only nodes at each level 
        for (let i = 0; i < miniQueue; i++) {
            const curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            miniLevel.push(curr.val)
        }
        //push arr of each level to output array
        level.push(miniLevel);
    }
    return level;
};