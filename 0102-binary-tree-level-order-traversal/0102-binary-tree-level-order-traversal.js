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

// Recursive solution
var levelOrder = function(root) {
    
    function traverseLevel(node, level) {
        if (!node) return; 
        if (level >= values.length) {
            values[level] = [];
        }
        values[level].push(node.val);
        level++;
        traverseLevel(node.left, level);
        traverseLevel(node.right, level);
    }
    
    let values = [];
    let level = 0;   
    traverseLevel(root, level);
    
    return values;  
}



//Level order traversal aka breadth first traversal

// var levelOrder = function(root) {
    
//     if (!root) return [];
//     let queue = [ root ];
//     let values = [];
    
//     while(queue.length > 0) {
//         let qLength = queue.length;
//         let level = [];
//         for (let i = 0; i < qLength; i++) {
//             let curr = queue.shift();
//             if (curr.left) queue.push(curr.left);
//             if (curr.right) queue.push(curr.right);
//             level.push(curr.val);
//         }
//         values.push(level);
//     }
    
//     return values;
// }

// root = [3,9,20,8,5,15,7]

















// var levelOrder = function(root) {
//     if (!root) return [];
//     let queue = [root];
//     let level = [];
  
//     while (queue.length > 0) {
//         //determine length of queue
//         let miniQueue = queue.length;
//         let miniLevel = [];
//         //loop through to include only nodes at each level 
//         for (let i = 0; i < miniQueue; i++) {
//             const curr = queue.shift();
//             if (curr.left) queue.push(curr.left);
//             if (curr.right) queue.push(curr.right);
//             miniLevel.push(curr.val)
//         }
//         //push arr of each level to output array
//         level.push(miniLevel);
//     }
//     return level;
// };