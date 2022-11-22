/**
 * @param {number[]} time
 * @return {number}
 */
//Hash map
//O(n) time, O(n) space
var numPairsDivisibleBy60 = function(time) {
    let lengthObj = {}
    let pairs = 0;
    for (let i = 0; i < time.length; i++) {
        let val = time[i] % 60;
        let rem = (60 - val) % 60;
        if (lengthObj[rem]) pairs += lengthObj[rem];
        lengthObj[val] = (lengthObj[val] || 0) + 1
    }
    return pairs;
};



// const numPairsDivisibleBy60 = (time) => {
//     const appearDic = {};
//     let ans = 0;
//     time.forEach(el => {
//         const mod = el % 60;
//         const left = (60 - mod) % 60;
//         ans += appearDic[left] ? appearDic[left] : 0;
//         appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
//     });
//     return ans;
// };


//Nested for loop - brute force
//O(n^2) time, O(1) space
// var numPairsDivisibleBy60 = function(time) {
//     let pairs = 0;
//     for (let i = 0; i < time.length-1; i++) {
//         for (let j = i+1; j < time.length; j++) {
//             let total = time[i] + time[j];
//             if (total % 60 === 0) pairs++;
//         }
//     }
//     return pairs;
// };