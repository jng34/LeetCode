/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    /*
        Implement a queue for simulation
        Find max element in arr - we know max elem will be winner if it comes to play
        Initialize win count = 0 and winner = arr[0].
        while arr.length > 0 (always true):
            opponent = arr.shift()
            if winner > opponent:
                push opponent to back of queue
                increment win count
            else:
                push winner to back of queue
                winner = opponent
                reset win count to 1
            if winner = max elem OR win count = k, then return winner
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
        if (winner === maxElem || winCount === k) return winner;
    }
};