/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    const [currHrs, currMins] = [Number(current.slice(0,2)), Number(current.slice(3))];
    const [corrHrs, corrMins] = [Number(correct.slice(0,2)), Number(correct.slice(3))];
    const currTotal = currHrs*60 + currMins;
    const corrTotal = corrHrs*60 + corrMins;
    
    let diff = corrTotal-currTotal;
    let opers = 0;
    let times = [60, 15, 5, 1];
    for (let time of times) {
        opers += Math.floor(diff/time);
        let rem = diff % time;
        if (rem === 0) break;
        diff = rem;
    }
    
    return opers;
};