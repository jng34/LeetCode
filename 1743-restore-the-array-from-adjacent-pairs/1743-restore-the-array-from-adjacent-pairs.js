/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    /*
       Create an adjacency graph and a set for seen;
       for each pair of adjacentPairs:
           for both vals in pair:
               if key doesn't exist, create an empty array for key
               add its partner to array
       Create a nums array.
       While nums.length < n 
       Start with a key that has only one partner.
       Add to nums and seen set.
       Check last added value in nums for neighbors.
       Iterate through its neighbors for an unseen value.
       Add to nums and seen set.
        
    */
    const n = adjacentPairs.length + 1;
    const graph = {};
    for (let pair of adjacentPairs) {
        const [a, b] = pair;
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    let nums = [], seen = new Set();
    
    // Find starting num
    for (let key in graph) {
        if (graph[key].length === 1) {
            nums.push(Number(key));
            seen.add(Number(key));
            break;
        }
    }
    
    // Find all adjacent pairs
    while (nums.length < n) {
        const last = nums[nums.length-1];
        for (let val of graph[last]) {
            if (!seen.has(val)) {
                nums.push(val);
                seen.add(val);
            }
        }
    }
    
    return nums;
    
};