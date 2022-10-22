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

//Iterative solution
var levelOrderBottom = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let values = [];
    
    while(queue.length > 0) {
        const qLen = queue.length;
        let level = [];
        for (let i = 0; i < qLen; i++) {
            let curr = queue.shift();
            level.push(curr.val);
            
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        values.push(level);
    }
    
    
    return values.reverse();
}

//Recursive Solution
// var levelOrderBottom = function(root) {
    
//     let values = [];
//     let level = 0;
//     traverseLevel(root, level);
//     return values.reverse();
    
//     function traverseLevel(node, level) {
//         if(!node) return;
//         if(level >= values.length) {
//             values[level] = [];
//         }
//         values[level].push(node.val);
//         level++;
//         traverseLevel(node.left, level);
//         traverseLevel(node.right, level);
//     } 
// };