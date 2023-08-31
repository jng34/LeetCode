/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    let steps = 0;
    let res = nums;
    
    /* 
       [2, 5, 1]
       [2, 4, 1, 1]
       [2, 3, 1, 1, 1]
       [2, 2, 1, 1, 1, 1]
       [2, 1, 1, 1, 1, 1, 1]
       [1，1，1, 1，1，1，1, 1]
     
       steps = 5
    */
    
    for (let i=res.length-2; i>=0; i--) {
      if (res[i] > res[i+1]) {
        let numOfElems;
        if (res[i] % res[i+1] === 0) {
          numOfElems = Math.floor(res[i] / res[i+1]);
        } else {
          numOfElems = Math.floor(res[i] / res[i+1]) + 1;
        }
        steps += numOfElems - 1;
        res[i] = Math.floor(res[i] / numOfElems);
      } else {
        continue;
      }
    }

    return steps;
};