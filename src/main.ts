import { createGameBoard, game } from "./blackjack";

function main(){

    const startGame: HTMLButtonElement = document.querySelector('#start-game')!;

    startGame.addEventListener('click', () => {
        startGame.style.display = 'none';
        const mainSection: HTMLElement = document.querySelector('#game-table')!;
        mainSection.innerHTML = createGameBoard();
        game()
    })
}
main();