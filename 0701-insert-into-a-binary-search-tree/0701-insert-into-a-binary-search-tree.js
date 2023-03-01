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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val);
    if (!root) return newNode;
    
    let curr = root;
    
    while (curr) {
        if (val > curr.val) {
            // insert if no right child
            if (!curr.right) {
                curr.right = newNode;
                return root;
            }
            
            // move left
            curr = curr.right;
        } else {      
            // insert if no left child
            if (!curr.left) {
                curr.left = newNode;
                return root;
            }
            
            // move left
            curr = curr.left;
        }
    }
    
    
//     let newNode = new TreeNode(val);
//     if (!root) return newNode;
//     let curr = root;
    
//     if (curr.val < val) {
//         if (curr.right) {
//             insertIntoBST(curr.right, val);
//         } else {
//             curr.right = newNode;
//         }
//     } else {
//         if (curr.left) {
//             insertIntoBST(curr.left, val);
//         } else {
//             curr.left = newNode;
//         }
//     }
//     return root;
};
