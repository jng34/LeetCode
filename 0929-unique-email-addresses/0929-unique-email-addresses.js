/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const regEx = /(\+.*\@|\@)/g
    const addresses = new Set();
    
    for (let email of emails) {
        const arr = email.split(regEx);
        const [local, domain] = [arr[0], arr[arr.length-1]]
        const address = local.split(/\./g).join('') + '@' + domain;
        if (!addresses.has(address)) addresses.add(address);
    }
    
    return addresses.size;
};