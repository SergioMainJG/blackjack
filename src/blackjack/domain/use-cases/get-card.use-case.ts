type game = {
    card: string,
    value: number,
    isEnd: boolean
}
export function getCard(deck: string[]): game {
    if (deck.length === 0) {
        return {
            card: '',
            value: 0,
            isEnd: true
        };
    }
    const getValue = (card: string): number => {
        if (!(/[AJQK]/.test(card))) return +card.replace(/[a-z]/ig, '');
        if (card.includes('A')) return 1;
        return 10;
    };
    const card = deck.pop()!;
    return {
        card: card,
        value: getValue(card),
        isEnd: false
    }
}