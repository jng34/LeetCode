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
    const swaps = selectionSort(nodeVals);
    operations += swaps;
  }
  
  function selectionSort(array) {
      let temp;
      let swaps = 0;
      for (let i = 0; i < array.length; i++){
          let minimum = i;

          for (let j = i + 1; j<array.length; j++) {
              if (array[j] < array[minimum]) {
                minimum = j;
              }
          }
          
          if (i !== minimum) {
            temp = array[i];
            array[i] = array[minimum];
            array[minimum] = temp;
            swaps++;
          }
      }
      return swaps;
  };
  
  return operations;
};