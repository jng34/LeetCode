/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);
    let i = 0; // track curr person to receive candy
    let candyCt = 1; // track curr candy count
    while (candies > 0) {
        // distribute candies to each person
        i %= num_people;
        // Check if candies is less than candyCt
        if (candies < candyCt) {
            ans[i] += candies;
            candies -= candies;
        } else {
            ans[i] += candyCt;
            candies -= candyCt;
            candyCt++;
        }
        i++;
    }
    return ans;
};