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
    const memo = {};
    return helper(0, 1, true);
    
    // Turn: alice = true, bob = false
    function helper(index, M, aliceTurn) {
        // helper fn returns number of stones alice can get (in terms of alice)
        const key = index + ',' + M + ',' + aliceTurn;
        if (memo[key]) return memo[key];
        if (index === n) return 0; 
        
        let sum = 0;
        let alice = aliceTurn ? -Infinity: Infinity;
        
        for (let x=1; x<=Math.min(2*M, n-index); x++) {
            sum += piles[index + x - 1];
            if (aliceTurn) { 
                // Alice's turn -> maximize stones
                alice = Math.max(alice, sum + helper(index + x, Math.max(M, x), false));
            } else { 
                // Bob's turn -> minimize stones
                alice = Math.min(alice, helper(index + x, Math.max(M, x), true));
            }
            memo[key] = alice;
        }
        
        return memo[key];
    }
};












