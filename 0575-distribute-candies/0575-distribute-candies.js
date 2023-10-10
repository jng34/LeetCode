/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const maxCandies = candyType.length/2;
    const diffCandies = new Set([...candyType]);
    return diffCandies.size >= maxCandies ? maxCandies : diffCandies.size
};