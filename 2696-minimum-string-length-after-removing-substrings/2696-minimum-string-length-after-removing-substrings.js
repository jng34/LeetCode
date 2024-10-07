/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  return checkAB(s);

  function checkAB(str) {
    let ab = str.indexOf('AB');
    while (ab >= 0) {
      str = str.substring(0, ab) + str.substring(ab + 2);
      ab = str.indexOf('AB');
    }
    const cd = str.indexOf('CD');
    return (cd >= 0) ? checkCD(str) : str.length;
  }
  
  function checkCD(str) {
    let cd = str.indexOf('CD');
    while (cd >= 0) {
      str = str.substring(0, cd) + str.substring(cd + 2);
      cd = str.indexOf('CD');
    }
    const ab = str.indexOf('AB');
    return (ab >= 0) ? checkAB(str) : str.length;
  }

};