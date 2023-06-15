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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    //BFS
    let sumObj = {};
    let stack = [[ root, 1 ]];
    while (stack.length > 0) {
        const [node, level] = stack.pop();
        if (sumObj[level]) {
            sumObj[level] += node.val;
        } else {
            sumObj[level] = node.val;
        }
        if (node.right) stack.push([node.right, level+1]);
        if (node.left) stack.push([node.left, level+1]);
    }
    let sumArr = Object.values(sumObj).sort((a,b) => b-a);
    return sumArr[k-1] ? sumArr[k-1] : -1;
};