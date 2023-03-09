/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let result = [];
  let minSum = Infinity;

  for (let i = 0; i < list1.length; i++) {
    const word = list1[i]
    const j = list2.indexOf(word);
    if (j > -1) {
      const indexSum = i + j;
      if (indexSum < minSum) {
        minSum = indexSum;
        result.pop();
        result.push(word);
      } else if (indexSum === minSum) {
        result.push(word);
      }
    } 
  }
  return result;
};