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
var findMode = function(root) {
    /*
        Iterate through root of BST with BFS - stack.
        let stack = [root];
        while stack.length > 0:
            curr = stack.pop()
            freq[curr.val] = (freq[curr.val] || 0) + 1;
            if (curr.right) stack.push(curr.right)
            if (curr.left) stack.push(curr.left)
        Create a hash map that keeps track of value and count
        Return array of values with max freq - mode.
    */
    
    const freq = {};
    let mode = -Infinity;
    let res = [];
    let stack = [ root ];
    while (stack.length > 0) {
        const curr = stack.pop();
        freq[curr.val] = (freq[curr.val] || 0) + 1;
        if (freq[curr.val] > mode) mode = freq[curr.val];
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    
    for (let key in freq) {
        if (freq[key] === mode) res.push(key);
    }
    
    return res;
};