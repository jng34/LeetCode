/**
 * @param {number[][]} image
 * @return {number[][]}
 */

// [ 1, 1, 0 ]   i=0
// [ 1, 0, 1 ]   i=1
// [ 0, 0, 0 ]   i=2

/*
   [0,1,1]
   [1,0,1]
   [0,0,0]
*/
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i].reverse();
        image[i] = image[i].map(el => el === 1 ? 0 : 1)
    }
    return image;
};