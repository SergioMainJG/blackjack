const specialCards = ['A', 'J', 'Q', 'K'];
const commonCards = ['C', 'D', 'H', 'S'];

export function createDeck(): string[] {
    const deck: Set<string> = new Set();
    for (let i = 0; i < commonCards.length; i++) {
        for (const card of specialCards) {
            deck.add(`${card}${commonCards[i]}`);
        }
        for (let i = 2; i < 11; i++) {
            deck.add(`${i}${commonCards[i]}`);
        }
    }
    return Array.from(deck);
}