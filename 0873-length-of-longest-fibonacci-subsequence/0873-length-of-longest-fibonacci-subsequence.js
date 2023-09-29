/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let nums = new Set(arr);
    let next, prev;
    let ans = 0;
    
    for (let i=0; i<arr.length-1; i++) {
        for (let j=i+1; j<arr.length; j++) {
            next = arr[i] + arr[j];
            prev = arr[j];
            let length = 2;
            while (nums.has(next)) {
                let sum = prev + next;
                prev = next;
                next = sum;
                length++;
                ans = Math.max(ans, length);
            }
        }
    }
    
    return ans >= 3 ? ans : 0;
};