/**
 * @param {number[][]} image
 * @return {number[][]}
 */

// [ 1, 1, 0 ]   i=0
// [ 1, 0, 1 ]   i=1
// [ 0, 0, 0 ]   i=2
var flipAndInvertImage = function(image) {
    let newImage = [];
    for (let i = 0; i < image.length; i++) {
        let flipped = image[i].reverse()
        for (let j = 0; j < flipped.length; j++) {
            if (flipped[j] === 1) {
                flipped[j] = 0;
            } else {
                flipped[j] = 1;
            }
        }
        newImage.push(flipped);
    }
    return newImage;
};