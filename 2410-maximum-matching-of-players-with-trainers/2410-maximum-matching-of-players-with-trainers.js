/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b) => b-a);
    trainers.sort((a,b) => b-a);
    let matches = 0;
    let i=0, j=0;
    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            matches++;
            i++;
            j++;
        } else {
            i++;    
        }
    }
    return matches;
};