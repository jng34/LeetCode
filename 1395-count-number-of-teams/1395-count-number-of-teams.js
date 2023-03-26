/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let teams = 0;
    const greater = new Array(rating.length).fill(0);
    const smaller = new Array(rating.length).fill(0);
    
    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < i; j++) {
            if (rating[i] < rating[j]) {
                smaller[i] += 1;
                teams += smaller[j];
            } else {
                greater[i] += 1;
                teams += greater[j];
            }
        }
    }
    
    return teams;
};