/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let ans = 0;
    details.forEach(p => {
        if (Number(p.slice(11,13)) > 60) ans++
    });
    return ans;
};