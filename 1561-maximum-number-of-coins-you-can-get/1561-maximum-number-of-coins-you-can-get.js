/**
 * @param {number[]} piles
 * @return {number}
 */

// [9,8,7,6,5,1,2,3,4]
// [9,8,7,6,5,4,3,2,1]
// 1. [9,8,1] you: 8
// 2. [7,6,2] you: 6
// 3. [5,4,3] you: 4
// total: 18

// Choose any 3 piles.
// Ideally, the 3 piles will have the max 2 piles and min pile.
// Sort piles in descending order.
// Select first index and increment every 2 indices until n/3 piles.

var maxCoins = function(piles) {
    piles.sort((a,b) => b-a);
    let coins = 0;
    const n = piles.length;
    
    let j = 1;
    for (let i = 1; i <= n/3; i++) {
        coins += piles[j];
        j += 2;
    }
    
    return coins;
};