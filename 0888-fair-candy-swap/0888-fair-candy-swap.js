/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let bobTotal = bobSizes.reduce((a,b) => a+b, 0);
    let aliceTotal = aliceSizes.reduce((a,b) => a+b, 0);
    let bobSet = new Set([...bobSizes]);
    for (let aliceGives of aliceSizes) {
        let bobGives = aliceGives + (bobTotal-aliceTotal)/2;
        if (bobSet.has(bobGives)) return [ aliceGives, bobGives ]; 
    }
};