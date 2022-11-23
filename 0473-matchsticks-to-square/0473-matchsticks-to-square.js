/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */

/*
    Sum up all matchsticks and check if divisible by 4
    Create hash map w/ stick length as key and number of sticks as value
    Check if sticks can be combined (not cut) to give 4 equal sides (sum/4)  
    Initiate side length count from 0 and count to 4
    If count = 4 after iterating through all sticks, return true else false
*/
var makesquare = function(matchsticks) {
    let perimeter = matchsticks.reduce((a, b) => a + b)
    if (perimeter % 4 !== 0) return false;
    
    let side = perimeter / 4;
    //Count up potential sides
    let square = new Array(4).fill(0);
    matchsticks.sort((a,b) => b-a)
    
    return findMatches(0, matchsticks, square, side);
    
}

var findMatches = function(i, matchsticks, square, side) {
    if (i === matchsticks.length) return true;
    
    for (let j = 0; j < 4; j++) {
        
        if (square[j] + matchsticks[i] <= side) {
            square[j] += matchsticks[i];
            if (findMatches(i + 1, matchsticks, square, side)) return true;
            square[j] -= matchsticks[i];
        }
    }

    return false;
}