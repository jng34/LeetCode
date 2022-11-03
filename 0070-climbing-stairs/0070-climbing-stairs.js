/**
 * @param {number} n
 * @return {number}
 */

/*
   initialize
   ways = 0
   use recursion
*/

var climbStairs = function(n) {
    
    //O(n) Time
    //O(1) Space
    
    let one = 1;
    let two = 1;
    
    for (let i = 0; i < n-1; i++) {
        let curr = one;
        one = one + two;
        two = curr;
    }
        
    return one;
}


// var climbStairs = function(n) {
    
//     // if n is 1, then return 1
//     // if n is 2, then return 2
//     // for n steps, we have to add the # of ways for the previous two steps
//     // fibonacci seq
//     // use tabulation 
    
//     //Time: O(n)
//     //Space: O(n)
    
//     let table = new Array(n+1).fill(0);
//     table[1] = 1;
//     table[2] = 2;
    
//     for (let i = 3; i < table.length; i++) {
//         table[i] = table[i-1] + table[i-2];
//     }
//     return table[n];
// }






// var climbStairs = function(n){
//     let [one, two] = [1, 1];
    
//     for (let i = 0; i < n-1; i++) {
//         let current = one;
//         one = one + two;
//         two = current;
//     }
//     return one;
// };




