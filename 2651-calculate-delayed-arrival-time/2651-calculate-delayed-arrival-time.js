/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let finalTime = arrivalTime + delayedTime;
    if (finalTime > 23) {
        finalTime -= 24
    }
    return finalTime;
};