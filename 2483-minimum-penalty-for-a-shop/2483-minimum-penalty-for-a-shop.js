/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let currPenalty = 0;
    
    for (let visit of customers) {
        if (visit === 'Y') currPenalty++;
    }
    
    let minPenalty = currPenalty;
    let earliest = 0; 
    
    // At any index, the penalty is sum of all 'N's left of index
    // and sum of all 'Y's right of index (inclusive)
    
    for (let i = 0; i < customers.length; i++) {
        const closeHr = customers[i];
        
        if (closeHr === 'Y') {
            currPenalty--;
        } else {
            currPenalty++;
        }
        
        if (currPenalty < minPenalty) {
            earliest = i + 1;
            minPenalty = currPenalty;
        } 
    }
    
    return earliest;
};