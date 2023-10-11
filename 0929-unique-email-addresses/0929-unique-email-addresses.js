/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const addresses = new Set();
    
    for (let email of emails) {
        let address = '';
        for (let ch of email) {
            if (ch === '+' || ch === '@') break;
            if (ch === '.') continue;
            address += ch;
        }
        address += email.substring(email.indexOf('@'));
        if (!addresses.has(address)) addresses.add(address);
    }
    
    return addresses.size;
};