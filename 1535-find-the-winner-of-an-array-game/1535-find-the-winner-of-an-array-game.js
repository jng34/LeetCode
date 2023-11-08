/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    /*
        [7,6,4,5,3,1,2]
        if k >= length of arr, then return max element in arr
        if k < length of arr, then simulate game.
        let count = {} -> hashmap that keeps count of consecutive wins for each element.
        Reverse arr.
        Use a stack (loser) to use as temporary storage of loser to replace at end of line.
        while count != k:
            -pop off two elements (last two) to compare
            -loser goes into the loser stack
            -push winner back into arr
            -increment winner's count
            if winner's count = k, then return winner
    */
    const maxElem = Math.max(...arr);
    let winner = arr.shift();
    let winCount = 0;
    
    while (arr.length > 0) {
        const opponent = arr.shift();
        if (winner > opponent) {
            winCount++;
            arr.push(opponent);
        } else {
            arr.push(winner);
            winner = opponent;
            winCount = 1;
        }
        if (winCount === k || winner === maxElem) return winner;
    }
};