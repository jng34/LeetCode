/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    // preorder traversal: root -> left tree - right tree
    return helper(root);
    
    function helper(node) {
        if (!node) return [];
        
        let ans = [ node.val ];
        const children = node.children;
        
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            ans.push(...helper(child));
        }
        
        return ans;
    }
};