/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    /*
        Optimization problem.
        Conditions:
           1. L x W = A(area)
           2. L >= W
           3. L - W is minimized
        Math:
           W = A / L
           W^2 <= A
           L^2 >= A
    */
    let l = 1;
    let w = Math.floor(Math.sqrt(area));
    while (w > 0) {
        l = area/w;
        if (l % 1 === 0) break;
        w--;               
    }
    return [l, w];    
};