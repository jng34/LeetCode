/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    // base case
    if (n === 1) return 0;
    return executeOp(2, 2, 1); // call fn after 1st copy
    
    // use recursion to count and compare all steps 
    // and return the minimum number
    function executeOp(numOps, numOfAs, prevNum) {  
        // if the number of 'A's on the screen equals n, 
        // then return num of operations
        if (numOfAs === n) return numOps;
        if (numOfAs > n) return 1000;
        
        // 1. Copy all characters AND Paste 
        const opt1 = executeOp(numOps + 2, numOfAs*2, numOfAs);
        
        // 2. Paste characters from previous copy
        const opt2 = executeOp(numOps + 1, numOfAs + prevNum, prevNum);
        
        return Math.min(opt1, opt2);
    }
};