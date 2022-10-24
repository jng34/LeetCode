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
var averageOfLevels = function(root) {
    
    let queue = [ root ];
    let values = [];
    
    while(queue.length > 0) {
        let levelLength = queue.length;
        let level = [];
        let sum = 0;
        // Iterate through each level and push val to level arr
        for (let i = 0; i < levelLength; i++) {
            let curr = queue.shift();
            sum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        
        // Find avg of level arr
        let avg = sum / levelLength;
        
        values.push(avg);
    }
    
    return values;
};