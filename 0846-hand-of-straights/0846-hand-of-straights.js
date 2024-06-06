/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  // check if size of hand is divisble by groupSize
  if (hand.length % groupSize > 0) return false;
  
  const cardCount = new Map();
  for (let card of hand) {
    if (cardCount.has(card)) {
      cardCount.set(card, cardCount.get(card) + 1);
    } else {
      cardCount.set(card, 1);
    }
  }
  console.log(cardCount)
  
  for (let card of hand) {
    let startCard = card;
    while (cardCount.has(startCard - 1)) startCard--;
    
    while (startCard <= card) {
      while (cardCount.get(startCard) > 0) {
        for (let i = startCard; i < startCard + groupSize; i++) {
          if (!cardCount.has(i) || cardCount.get(i) === 0) return false;
          cardCount.set(i, cardCount.get(i) - 1);
        }
      }
      startCard++;
    }
  }
  
  return true;
}