/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const m = flowerbed.length;
    let count = 0;
    let i = 0;
    while(i < m) {
        if (flowerbed[i] === 0) {
            const left = i === 0 || flowerbed[i-1] === 0;
            const right = i === m-1 || flowerbed[i+1] === 0;
            if (left && right) {   
                flowerbed[i] = 1;
                count++;
            }
        }
        i++;
    }
    return count >= n;
};