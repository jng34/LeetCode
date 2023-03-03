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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // Recursion
    if (!root) return null;
    if (root.val === key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let curr = root.right;
        while (curr.left) {
            curr = curr.left;
        }
        curr.left = root.left;
        return root.right;
    }
    
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }
    
    return root;
    
    
    
//     // Base cases
//     if (!root || root.val === key) return null;
    
//     let prevNode = null;
//     let currNode = root;
//     let isLeft = true;
    
//     while (currNode && currNode.val !== key) {
//         prevNode = currNode;
//         if (currNode.val > key) {
//             currNode = currNode.left;
//             isLeft = true;
//         } else {
//             currNode = currNode.right;
//             isLeft = false;
//         }
//     }
    
//     if (!currNode.left) {
//         prevNode.right = currNode.
    
//     return root;
};