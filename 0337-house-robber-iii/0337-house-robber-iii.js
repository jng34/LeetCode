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
 * @return {number}
 */
var rob = function(root) {
    // DFS + Memoization w/ Map (key: node, val: max $)
    const memo = new Map();
    return robMax(root);
    
    function robMax(node) {
        if (memo.has(node)) return memo.get(node);
        if (!node) return 0;
        /*
            Choose curr + :
                Decision1: curr.left.left + curr.left.right
                Decision2: curr.right.left + curr.righ.right
        */
        let chooseHouse = node.val;
        if (node.left) chooseHouse += robMax(node.left.left) + robMax(node.left.right)
        if (node.right) chooseHouse += robMax(node.right.left) + robMax(node.right.right)
        
        // Skip curr
        const skipHouse = robMax(node.left) + robMax(node.right);
        
        memo.set(node, Math.max(chooseHouse, skipHouse));
        return memo.get(node);
    }
    
};