/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//Iterative Solution
var isSameTree = function(p, q) {
    let queue = [p, q];
    while (queue.length > 0) {
        let pNode = queue.shift();
        let qNode = queue.shift();
        
        if (!pNode && !qNode) continue;
        if (!pNode || !qNode || pNode.val !== qNode.val) return false;
        
        queue.push(pNode.left);
        queue.push(qNode.left);
        queue.push(pNode.right);
        queue.push(qNode.right);
        
    }
    
    return true;
}




// Recursive Solution
// var isSameTree = function(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     if (p.val !== q.val) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }