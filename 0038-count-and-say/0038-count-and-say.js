/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    let say = "11";
    // let arr;
    while (n > 2) {
        say = strToPairs(say);
        // say = arrToStr(arr);
        n--;
    }    
    return say; 
};

function strToPairs(str) {
    let val = str[0];
    let count = 1;
    let map = [];
    for (let i=1; i<str.length; i++) {
        if (str[i] === val) {
            count++;
        } else {
            map.push([String(count), String(val)]);
            val = str[i];
            count = 1;
        }
        //Handle last number 
        if (i+1 === str.length) {
            map.push([String(count), String(val)]);
        }
    }
    
    let res = [];
    for (let pair of map) {
        res.push(...pair.flat());
    }
    return res.join('');
}

// function arrToStr(pairs) {
//     let res = [];
//     for (let pair of pairs) {
//         res.push(...pair.flat());
//     }
//     return res.join('')
// }