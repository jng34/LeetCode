/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let maxTime = -Infinity;
    let tree = [];
    for (let i=0; i<n; i++) {
        tree[i] = [];
    }
    for (let i=0; i<n; i++) {
        if (manager[i] !== -1) {
            tree[manager[i]].push(i);
        }
    }
    
    function dfs(node) {
        let maxTime = 0;
        for (let subordinate of tree[node]) {
            maxTime = Math.max(maxTime, dfs(subordinate))
        }
        return maxTime + informTime[node]
    }
    
    return dfs(headID);
};