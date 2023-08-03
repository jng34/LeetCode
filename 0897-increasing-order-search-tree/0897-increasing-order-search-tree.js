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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let nums = [];
    inOrderTraversal(root);
    const head = new TreeNode(nums[0]);
    let curr = head;
    for (let i=1; i<nums.length; i++) {
        const node = new TreeNode(nums[i]);
        curr.right = node;
        curr = node;
    }
    return head;
    
    // In order traversal
    function inOrderTraversal(node) {
        if (!node) return;
        inOrderTraversal(node.left);
        nums.push(node.val);
        inOrderTraversal(node.right);
    }
    
};
