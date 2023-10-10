/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    /*
        Alices goes first.
        Both players play optimally.
        M = 1, 1 <= X <= 2M, update M = max(M, X) after each turn
        
        if there is 1 pile, then Alice gets piles[0]
        if there are 2 piles, then Alice gets both piles[0] and piles[1] b/c X = 2
        if there are 3 piles, then Alice grabs both piles[0] and piles[1]. 
        Bob grabs pile[2].
        if there are 4 piles, then Alice chooses:
            case 1: Alice grabs 1 pile, Bob grabs 2, Alice grabs 1
            case 2: Alice grabs 1, Bob grabs 1, Alice grabs 2
            case 3: Alice grabs 2, Bob grabs 2
        Alice = max(case1, case2, case3)
        
        ex: [1,2,3,4,5,100]
        
        Alice(A) + Bob(B) = Total ---> B = Total - A
        Alice(max) = Bob(min)
        
    */
    
    const n = piles.length;
    const dp = Array(2).fill().map(() => Array.from(Array(n+1), () => new Array(n+1).fill(-1)))
    // dp = [ [n+1 length], [n+1 length] ]
    //              A            B
    return helper(0, 1, 0);
    
    // Turn: alice = 0, bob = 1
    function helper(index, M, turn) {
        // helper fn returns number of stones alice can get (in terms of alice)
        if (index === n) return 0; 
        if (dp[turn][index][M] !== -1) return dp[turn][index][M];
        
        let alice = turn === 0 ? -Infinity: Infinity;
        let sum = 0;

        for (let x=1; x<=Math.min(2*M, n-index); x++) {
            sum += piles[index + x - 1];
            if (turn === 0) { 
                // Alice's turn -> maximize stones
                alice = Math.max(alice, sum + helper(index + x, Math.max(M, x), 1));
            } else { 
                // Bob's turn -> minimize stones
                alice = Math.min(alice, helper(index + x, Math.max(M, x), 0));
            }
        }
        dp[turn][index][M] = alice;
        return dp[turn][index][M];
    }
};












