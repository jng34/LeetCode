/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    
    for (let c of candies) {
        let temp = c + extraCandies;
        if (temp >= Math.max(...candies)) {
            result.push(true);
        } else {
            result.push(false);
        }
    }  
    
    return result;
};