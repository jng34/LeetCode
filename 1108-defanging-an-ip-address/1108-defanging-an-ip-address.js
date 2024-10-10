/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let defangIP = [];
  for (let ch of address) {
    if (ch === '.') {
      defangIP.push('[.]');
    } else {
      defangIP.push(ch);
    }
  }
  return defangIP.join('');
};