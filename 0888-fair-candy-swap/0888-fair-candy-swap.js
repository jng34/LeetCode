/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let bobTotal = bobSizes.reduce((a,b) => a+b, 0);
    let aliceTotal = aliceSizes.reduce((a,b) => a+b, 0);
    
    for (let i=0; i<aliceSizes.length; i++) {
        let aliceSum = aliceTotal;
        let bobSum = bobTotal;
        for (let j=0; j<bobSizes.length; j++) {
            aliceSum = aliceSum - aliceSizes[i] + bobSizes[j];
            bobSum = bobSum - bobSizes[j] + aliceSizes[i];
            if (aliceSum === bobSum) return [aliceSizes[i], bobSizes[j]];
            aliceSum = aliceTotal;
            bobSum = bobTotal;
        }
    }
    
};