/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    const max = Math.max(...candies);
    
    for (let c of candies) {
        let temp = c + extraCandies;
        if (temp >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }  
    
    return result;
};