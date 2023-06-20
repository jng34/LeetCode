/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = deck => {
    deck.sort((a, b) => a - b);
    const newDeck = [];
    while (deck.length > 0) {
        newDeck.unshift(deck.pop());
        newDeck.unshift(newDeck.pop());
    }
    newDeck.push(newDeck.shift());
    return newDeck;
};