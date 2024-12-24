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
var minimumOperations = function(root) {
  // Track number of operations
  let operations = 0;
  
  // Use a queue
  let queue = [ root ];
  let level = 0;
  while (queue.length > 0) {
    const levelSize = queue.length;
    const nodeVals = [];
    for (let i = 0; i < levelSize; i++) {
      const curr = queue.shift();
      nodeVals.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    
    // Find number of swaps to get in ascending order
    const swaps = getNumberOfSwaps(nodeVals);
    operations += swaps;
  }
  
  function getNumberOfSwaps(array) {
    const target = [...array].sort((a,b) => a-b);
    let swaps = 0;

    // Map to track current position of values
    const tracker = {};
    array.forEach((n, idx) => tracker[n] = idx);
    console.log(tracker)

    for (let i = 0; i < array.length; i++){
        if (array[i] !== target[i]) {
          swaps++;
          // Update position of swapped values
          let currPos = tracker[target[i]]; 
          tracker[array[i]] = currPos; 
          array[currPos] = array[i];
        }
    }
    return swaps;
  };
  
  return operations;
};