/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let altitude = 0;
    gain.forEach((alt) => {
        altitude += alt;
        highest = Math.max(highest, altitude);
    })
    return highest;
};