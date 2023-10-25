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
var largestValues = function(root) {
    /*
        Create a hash map to store rows as keys and max values as values.
        Keep track of each node value and row (0-indexed) in a queue
        While queue.length > 0:
            Destructure node, row in front of queue
            If node.val in specific row > curr row's max val:
                update max val
            If node.right exists:
                push into queue
            If node.left exists:
                push into queue
        return Object.keys(hash map)
    */
    
    if (!root) return [];
    const maxVals = {};
    let queue = [[root, 0]];
    while (queue.length > 0) {
        const [node, row] = queue.shift();
        
        if (maxVals[row]) {
            maxVals[row] = Math.max(maxVals[row], node.val);
        } else {
            maxVals[row] = node.val;
        }
        
        if (node.right) queue.push([node.right, row + 1]);
        if (node.left) queue.push([node.left, row + 1]);
    }
    return Object.values(maxVals);
};










