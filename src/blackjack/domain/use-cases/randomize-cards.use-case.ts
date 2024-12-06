export function randomizeCards(deck: string[]): string[] {
    for (let i = 0; i < deck.length; i++) {
        const j = Math.floor(Math.random() * i)
        const aux = deck[i];
        deck[i] = deck[j];
        deck[j] = aux;
    }
    return deck;
}