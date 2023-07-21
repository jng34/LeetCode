/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let n = directions.length;
    let dirArr = [...directions];
    let collisions = 0;
    let stack = [];
    for (let i=0; i<n; i++) {
        if (!stack.length) {
            stack.push(dirArr[i]);
        } else if (stack[stack.length-1]==='S' && dirArr[i]==='L') {
            collisions += 1;  
        } else if (stack[stack.length-1]==='R' && dirArr[i]==='L') {
            stack.pop();
            dirArr[i] = 'S';
            collisions += 2;
            i--;
        } else if (stack[stack.length-1]==='R' && dirArr[i]==='S') {
            stack.pop();
            collisions += 1;
            i--;
        } else {
            stack.push(dirArr[i]);
        }
    }
    return collisions;
};