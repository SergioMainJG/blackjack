import { BasePlayer, PlayerIA, createDeck, getCard, randomizeCards } from "../../blackjack";

function addCard (card: string){
    return `<img class="deck" src="/imgs/cards/${card}.avif" alt="backside-deck" />`
}

export const game = () => {
    const deck = randomizeCards(createDeck());
    const playerHuman = new BasePlayer();
    const pcPlayer = new PlayerIA(new BasePlayer());

    let isWinner = false;
    let isStand = false;

    const { card, isEnd, value } = getCard( deck );
    
    const userCards: HTMLDivElement = document.querySelector('#user-cards')!;
    const userScore: HTMLHeadingElement = document.querySelector('#score')!;
    const pcCards: HTMLDivElement = document.querySelector('#pc-cards')!;
    const pcScore: HTMLHeadingElement = document.querySelector('#pc-score')!;

    playerHuman.setScore( value );
    userScore.textContent! = playerHuman.getScore().toString();
    pcScore.textContent! = pcPlayer.getScore().toString();
}