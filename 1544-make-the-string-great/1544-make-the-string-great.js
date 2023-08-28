/**
 * @param {string} s
 * @return {string}
 */

// og  = abBAcC
//         i = 2
// goodStr = aAcC
//            i=1
var makeGood = function(s) {
  let alpha = new Set([...'abcdefghijklmnopqrstuvwxyz']);
  let ogStack = [...s];
  let remStack = [];
  let ogLast, remLast; 
  while (ogStack.length > 0) {
    ogLast = ogStack.pop();
    if (remStack[remStack.length-1]) {
      remLast = remStack[remStack.length-1];
    } else {
      remStack.push(ogLast);
      continue;
    }
    
    if ( (alpha.has(ogLast) && (remLast === ogLast.toUpperCase())) || 
         (alpha.has(remLast) && (ogLast === remLast.toUpperCase())) ) {
      remStack.pop();
    } else {
      remStack.push(ogLast);
    }
  }
  
  return remStack.reverse().join('');
};

