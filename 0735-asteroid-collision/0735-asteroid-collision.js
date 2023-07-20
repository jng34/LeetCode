/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let res = [...asteroids];
    let i = res.length-1;
    while (i>=1) {
        let curr = res[i];
        let next = res[i-1];
        if (curr < 0 && next > 0) {
            if (Math.abs(curr) > Math.abs(next)) {
                res.splice(i-1, 1);
            } else if (Math.abs(curr) < Math.abs(next)) {
                res.splice(i, 1);
            } else {
                res.splice(i-1, 2)
            }
            i = res.length-1;
        } else if (curr > 0 && next < 0) {
            i--;
        } else {
            i--;
        }
    }
    return res;
    
    // [10,2,-5]
    // [10,-5]
    // next  curr
};