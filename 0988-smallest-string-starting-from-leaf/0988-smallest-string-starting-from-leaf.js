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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    // Find all paths from root to leaf, concatenating the letters along the way
    // reverse the strings and compare lexicographically
    // create a dictionary using hashmap
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    const dict = {};
    for (let i = 0; i < alpha.length; i++) {
        dict[i] = alpha[i];
    }
    
    // store all strings
    const allStrs = [];
    // find all strings
    findRootToLeaf(root, "");
    
    let ans = reverseStr(allStrs[0]);
    // reverse and compare strs
    for (let i = 1; i < allStrs.length; i++) {
        const str = allStrs[i];
        const revStr = reverseStr(str);
        if (revStr <= ans) ans = revStr;
    }
    
    return ans;
    
    
    
    // helpers
    function findRootToLeaf(node, str) {
        //base case
        if (!node) return;
        
        //add corresponding letter to str
        str += dict[node.val];
        
        //base case - if node is a leaf node
        if (!node.left && !node.right) {
            return allStrs.push(str); 
        }
        
        findRootToLeaf(node.left, str);
        findRootToLeaf(node.right, str)
    }
    function reverseStr(str) {
        let newStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
};