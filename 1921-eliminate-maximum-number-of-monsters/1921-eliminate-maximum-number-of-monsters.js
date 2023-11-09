/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let eliminated = 0;
    let arrival = [];
    for (let i=0; i<dist.length; i++) {
        arrival[i] = dist[i]/speed[i];
    }
    arrival.sort((a,b) => a-b);
    for (let i=0; i<arrival.length; i++) {
        if (arrival[i] <= i) break;
        eliminated++;
    }
    return eliminated;
};