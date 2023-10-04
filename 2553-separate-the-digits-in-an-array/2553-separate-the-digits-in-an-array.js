/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let answer = [];
    nums.forEach(d => {
        let numStr = String(d);
        for (let n of numStr) {
            answer.push(+n);
        }
    })
    return answer;
};