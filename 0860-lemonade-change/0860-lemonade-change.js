/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // base case if first customer does not give $5
    if (bills[0] !== 5) return false;
    
    // use hashmap to track amt of change 
    const register = {
        '5': 1,
        '10': 0,
        // $20 bills are insignificant
    }
    
    // iterate and start with 2nd customer
    for (let c = 1; c < bills.length; c++) {
        // amount of change could be $15, $5, or $0
        const change = bills[c] - 5;
            
        // 1. Customer paid with $20: deduct one $10 & one $5, or three $5s
        if (change === 15) {
            if (register['10'] > 0 && register['5'] > 0) {
                register['10']--;
                register['5']--;
            } else if (register['5'] > 2) {
                register['5'] -= 3;       
            } else {
                return false;
            }
        
        // 2. Customer paid with $10: deduct one $5 bill 
        } else if (change === 5) {
            if (register['5'] > 0) {
                register['5']--;
            } else {
                return false;
            }
            
            // add $10 bill to register
            register['10']++;
            
        // 3. Customer paid with $5: no change so add $5 bill
        } else {
            register['5']++;
        }        
    }
    
    return true;
};