/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let start = timeSeries[0];
    let end = timeSeries[0] + duration - 1;
    let total = duration;
    
    // timeSeries = [1,2]  duration = 3
    // start = 1, end = 2
    // first iteration: [1, 3]
    //               
    // second iteration [2, 4]
    
    for (let i=1; i<timeSeries.length; i++) {
        const [currStart, currEnd] = [timeSeries[i], timeSeries[i] + duration - 1];
        if (currStart < end) {
            total -= (end - currStart + 1);
        } 
        if (currStart === end) {
            total--;
        }
        start = currStart;
        end = currEnd;
        total += duration;
    }
    
    return total;
};