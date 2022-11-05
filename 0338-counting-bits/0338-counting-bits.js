/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
    /*
        Optimized solution: 
        -Use recursion/helper function
        -Array of 1s for each n basically same as previous array of 1s, 
        -but includes n's number of 1s
    */
    
    let ans = [];

    function countOnes(num, ans) {
        if (num === 0) {
            ans.unshift(0);
            return ans;
        }
        
        let binary = num.toString(2);
        let count = 0;
        
        for (let digit of binary) {
            if (digit === '1') count++;
        }
        ans.unshift(count);
        
        return countOnes(num-1, ans);
    }
    
    return countOnes(n, ans);
};


// var countBits = function(n) {
//     /*
//      Brute Force Solution:
//      - Iterate from 0 to n
//      - Convert each num to binary number using n.toString(2)
//      - Then count # of 1s in each num (string type)
//      - Push result in ans array
//      - Return ans array
     
//      Time: O(n^2) -nested for loops
//      Space: O(n)
//     */
    
//     let ans = [];
    
//     for (let i = 0; i <= n; i++) {
        
//         let binary = i.toString(2);
//         let count = 0;
//         for (let digit of binary) {
//             if (digit === '1') count++;
//         }
        
//         ans.push(count);
        
//     } 
    
//     return ans;
// };