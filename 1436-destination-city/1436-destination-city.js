/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let visited = new Set();
    for (let path of paths) {
        visited.add(path[0]);
    }
    for (let path of paths) {
        if (!visited.has(path[1])) return path[1];
    }
};