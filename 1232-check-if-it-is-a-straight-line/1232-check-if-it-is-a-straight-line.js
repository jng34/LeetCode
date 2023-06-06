/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    coordinates.sort((a,b) => a[0]-b[0])
    let slope = Math.abs((coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]));    
    for (let i=2; i<coordinates.length; i++) {
        let checkSlope = Math.abs((coordinates[i][1]-coordinates[i-1][1])/(coordinates[i][0]-coordinates[i-1][0]));
        if (checkSlope !== slope) return false;
    }
    return true;
};