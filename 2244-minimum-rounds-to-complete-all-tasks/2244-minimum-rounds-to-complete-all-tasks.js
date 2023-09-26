/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    /*
        initialize 
         - rounds
         - levels hashmap to count occurences of difficulty levels
        for each diff level:
            if # of occurences in diff level is divisble by 3, 
                divide by 3 and until final occurence
                increment rounds by quotient
                divide remainder by 2 and increment rounds by quotient
                if not divisible, then return -1
        return rounds
    */
    
    let rounds = 0;
    let levels = {};
    for (let t of tasks) {
        levels[t] = (levels[t] || 0) + 1;
    }
    
    for (let l in levels) {
        if (levels[l] === 1) return -1;
        let rem = levels[l] % 3;
        let quot = Math.floor(levels[l] / 3);

        // if rem is 0, then round += Math.floor(levels[l]/3)
        if (rem === 0) {
            rounds += quot;

        // if rem is 1, then round += Math.floor(levels[l]-4)/3 and round+=2 for rem 4
        } else if (rem === 1) {
            quot = Math.floor((levels[l] - 4) / 3);
            rounds += quot + 2;

        // if rem is 2, then round += Math.floor(levels[l]/3) and round++ for rem 2
        } else {
            rounds += quot + 1;
        }
    }

    return rounds;
};