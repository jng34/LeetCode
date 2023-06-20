/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = deck => {
    deck.sort((a, b) => b - a);
    const newDeck = [];
    while (deck.length > 0) {
        newDeck.push(deck.shift());
        newDeck.push(newDeck.shift());
    }
    newDeck.unshift(newDeck.pop());
    return newDeck.reverse();
};