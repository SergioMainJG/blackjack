import { BasePlayer, createDeck, PlayerIA, randomizeCards } from "@blackjack/index"



export const game = () => {
    const deck = randomizeCards( createDeck() );

    const playerHuman = new BasePlayer();
    const pcPlayer = new PlayerIA( new BasePlayer() );
}