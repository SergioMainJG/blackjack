const specialCards = ['A', 'J', 'Q', 'K'];
const commonCards = ['C', 'D', 'H', 'S'];

export function createDeck(): string[] {
    const deck: string[]= [];
    for (let i = 0; i < commonCards.length; i++) {
        for (const card of specialCards) {
            deck.push(`${card}${commonCards[i]}`);
        }
        console.log( commonCards[i])
        for (let j = 2; j < 11; j++) {
            deck.push(`${j}${commonCards[i]}`);
        }
    }
    return deck;
}