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

//Iterative
var isSymmetric = function(root) {
    
    let queue = [root.left, root.right];
    
    while(queue.length > 0) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        
        if (!node1 & !node2) continue;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;
        
        queue.push(node1.left);
        queue.push(node2.right);
        queue.push(node1.right);
        queue.push(node2.left);
    }

    return true;
    
}

// Recursive
// var isSymmetric = function(root) {
    
//     function mirrorCheck(n1, n2) { 
//         if (!n1 && !n2) return true;
//         if (!n1 || !n2 || n1.val !== n2.val) return false;
//         return mirrorCheck(n1.left, n2.right) && mirrorCheck(n1.right, n2.left)
//     }
    
//     return mirrorCheck(root.left, root.right);
// }