/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let res = 0;
    
    // [1]
    //      i
    // rem = 1
    while (stones.length > 1) {
        stones.sort((a,b) => a-b);
        let heaviest1 = stones.pop();
        let heaviest2 = stones.pop();
        let res = heaviest1 - heaviest2;
        stones.push(res);
    }
    return stones[0];
};