/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let visited = {};
    paths.forEach(path => {
        const [start, end] = path;
        if (visited[start]) {
            visited[start] = [visited[start][0] + 1, 'none'];
        } else {
            visited[start] = [1, 'begin'];
        }
        
        if (visited[end]) {
            visited[end] = [visited[end][0] + 1, 'none'];
        } else {
            visited[end] = [1, 'dest'];
        }
    })
    
    for (let path in visited) {
        if (visited[path][1] === 'dest') return path;
    }

};