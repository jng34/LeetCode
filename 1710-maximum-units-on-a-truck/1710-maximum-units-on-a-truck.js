/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  /*
    Sort boxes with greatest number of units (descending order)
    Decrement truckSize after taking on each box
    Return num of units
  */
  
  boxTypes.sort((a,b) => b[1] - a[1]);
  let totalUnits = 0, i = 0;
  
  for (let i = 0; i < boxTypes.length; i++) {
    const [ boxes, boxUnits ] = boxTypes[i];
    if (truckSize >= boxes) {
      totalUnits += boxes * boxUnits;
      truckSize -= boxes;
    } else if (truckSize > 0 && truckSize < boxes) {
      totalUnits += truckSize * boxUnits;
      truckSize = 0;
    } else {
      break;
    } 
  }
  
  return totalUnits;
};